import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import "../main.scss";
import "../../component/sidebar.css";
import Button from "@mui/material/Button";
import { ToggleButton } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import { Outlet } from "react-router-dom";
import Sidebar from "../../component/sidebar";
import PomoTime from "./PomoTime";
import MusicTest from "../../component/MusicTest";
import { themeContext } from "../../ThemeContext";

const BUTTON_SETTINGS = [
  {
    choose: "pomo",
    second: 0,
    minutes: 25,
    index: 1,
  },
  {
    choose: "short",
    second: 0,
    minutes: 5,
    index: 0,
  },
  {
    choose: "long",
    second: 0,
    minutes: 15,
    index: 7,
  },
];

function Main() {
  const theme = useContext(themeContext);
  const [running, setRun] = useState(false);
  const [done, setDone] = useState(false);
  const [choose, setChoose] = useState("pomo");
  const [time, setTime] = useState({ second: 0, minutes: 25 });
  const [index, setIndex] = useState(1); // qua trinh chay
  const [valueTab, setValueTab] = useState("pomo");
  const [alignment, setAlignment] = useState();

  const handleChangeBar = (event, newValue) => {
    setValueTab(newValue);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const toggle = useCallback(() => {
    setRun(!running);
  }, [running]);

  const handleChangeSetting = (settingNo) => {
    setChoose(BUTTON_SETTINGS[settingNo].choose);
    setTime({
      second: BUTTON_SETTINGS[settingNo].second,
      minutes: BUTTON_SETTINGS[settingNo].minutes,
    });
    setIndex(BUTTON_SETTINGS[settingNo].index);
  };

  useEffect(() => {
    if (done === true) {
      toggle();
      setDone(false);
    }
  }, [done]);

  return (
    <div className="container flex flex-col gap-6">
      <div className="container-box flex-auto">
        <Tabs
          value={valueTab}
          onChange={handleChangeBar}
          textColor="inherit"
          indicatorColor={theme.theme === "light-theme" ? "primary" : "none"}
          aria-label="secondary tabs example"
        >
          <Tab
            onClick={() => handleChangeSetting(0)}
            value="pomo"
            label="POMODORO"
          />
          <Tab
            onClick={() => handleChangeSetting(1)}
            value="short"
            label="Short Break"
          />
          <Tab
            onClick={() => handleChangeSetting(2)}
            value="long"
            label="Long Break"
          />
        </Tabs>

        <PomoTime
          choose={choose}
          setChoose={setChoose}
          running={running}
          setRun={setRun}
          time={time}
          setTime={setTime}
          setValue={setValueTab}
          index={index}
          setIndex={setIndex}
          done={done}
          setDone={setDone}
        />

        <ToggleButtonGroup
          value={alignment}
          onChange={handleAlignment}
          fullWidth
          color={theme.theme === "dark-theme" ? "standard" : "primary"}
          size="medium"
        >
          <ToggleButton
            className={theme.theme === "dark-theme" ? "abc" : "none"}
            value="btn"
            onClick={toggle}
          >
            {running ? "pause" : "start"}
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      <Outlet />
      <MusicTest classname="w-[80px]" />
    </div>
  );
}

export default Main;
