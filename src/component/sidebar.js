import React, { useContext } from "react";
import "./sidebar.css";
import Main from "../container/POMODORO/Main";
import { NavLink, Outlet } from "react-router-dom";
import { themeContext } from "../ThemeContext";

const Sidebar = () => {
  const theme = useContext(themeContext);

  return (
    <>
      <div className={theme.theme}>
        <div className="s-layout__sidebar">
          <a
            className="s-sidebar__trigger"
            href="my-app/src/component/sidebar#0"
          >
            <i className="fa fa-bars"></i>
          </a>

          <nav className="s-sidebar__nav">
            <ul>
              <li>
                <NavLink to="/home" className="s-sidebar__nav-link">
                  <i className="fa fa-home"></i>
                  <em>Home</em>
                </NavLink>
              </li>
              <li>
                <NavLink to="/music" className="s-sidebar__nav-link">
                  <i className="fa fa-user"></i>
                  <em>Music</em>
                </NavLink>
              </li>
              <li>
                <NavLink to="/pomodoro" className="s-sidebar__nav-link">
                  <i className="fa fa-camera"></i>
                  <em>Pomodoro</em>
                </NavLink>
              </li>
              {/*<li>*/}
              {/*    <NavLink to="/pomodoro/setting" className="s-sidebar__nav-link" >*/}
              {/*        <i className="fa fa-camera"></i><em>Setting</em>*/}
              {/*    </NavLink>*/}
              {/*</li>*/}
            </ul>
          </nav>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Sidebar;
