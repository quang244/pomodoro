import React, { useEffect, useState } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import axiosConfig from "../config/AxiosConfig";
import { setCookie } from "../config/Cookie";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const response = await axiosConfig({
      url: "/API/v1/login",
      method: "POST",
      data: {
        username: username,
        password: password,
      },
    });
    if (response.data.errorCode === 0) {
      console.log(response.data.data.accessToken);
      setCookie("token", response.data.data.accessToken, 60);
    } else {
      console.log(response.data);
    }
  };
  return (
    <div>
      <div className="login-form">
        <h1>Login</h1>
        <input
          type="text"
          onChange={(event) => setUsername(event.target.value)}
          value={username}
          placeholder="Username"
          required
        />
        <input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
          placeholder="Password"
          required
        />

        <button onClick={handleLogin}>Đăng Nhập</button>
      </div>

      <div>
        <a href="/register">register</a>
      </div>
    </div>
  );
};

export default Login;
