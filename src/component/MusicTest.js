import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import axiosConfig from "../config/AxiosConfig";
import ReactAudioPlayer from "react-audio-player";
import { BiSkipNext, BiSkipPrevious, BiPlay, BiPause } from "react-icons/bi";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";

const MusicTest = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [url, setUrl] = useState("");
  const [curSong, setCurSong] = useState("");
  const [index, setIndex] = useState(0);
  const myRef = useRef();
  const [volume, setVolume] = useState(1);

  const handleVolome = (event, newValue) => {
    setVolume(newValue);
    myRef.current.volume = newValue;
  };

  const handlePlay = () => {
    const audioComponent = myRef.current;
    if (audioComponent) {
      if (isPlaying === false) {
        setIsPlaying(!isPlaying);
        audioComponent.play();
      } else {
        setIsPlaying(!isPlaying);
        audioComponent.pause();
      }
    }
  };

  const handleNext = () => {
    setIndex(index + 1);
    if (index === 2) {
      setIndex(0);
    }
  };

  const handlePrev = () => {
    setIndex(index - 1);
    if (index === 0) {
      setIndex(2);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosConfig({
        url: "/home",
        method: "get",
      });
      if (response.data.err === 0) {
        const idSong = response.data.data.items[0].items[index].encodeId;
        setCurSong(idSong);
        console.log(idSong);
      }
    };
    fetchData();
  }, [index]);

  useEffect(() => {
    const fetchSong = async () => {
      const response = await axiosConfig({
        url: "/song",
        method: "get",
        params: { id: curSong },
      });
      // console.log(response.data.data[128])
      console.log(response);
      const reponseBody = response.data;

      if (response.data.err === 0) {
        const qualityUrl = reponseBody.data[128]; // 128: quality of audio
        // todo, check if 128 quality exist
        setUrl(qualityUrl);
      }
    };
    fetchSong();
  }, [curSong]);

  return (
    <div>
      {/*<button onClick={()=> handleNext()}>next</button>*/}
      <audio ref={myRef} src={url} autoPlay={isPlaying} />
      <div>
        <div className=" w-[300px] flex justify-center">
          <button onClick={() => handlePrev()}>
            <BiSkipPrevious size={30} />
          </button>
          <button onClick={() => handlePlay()}>
            {isPlaying ? <BiPause size={30} /> : <BiPlay size={30} />}
          </button>
          <button onClick={() => handleNext()}>
            <BiSkipNext size={30} />
          </button>
        </div>

        <Box sx={{ width: 300 }}>
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <VolumeDown size={30} />
            <Slider
              aria-label="Volume"
              value={volume}
              onChange={handleVolome}
              step={0.1}
              min={0}
              max={1}
            />
            <VolumeUp />
          </Stack>
        </Box>
      </div>
    </div>
  );
};

export default MusicTest;
