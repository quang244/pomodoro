import React from "react";
import axios from "axios";
import axiosConfig from "../config/AxiosConfig";
import instance from "../config/AxiosConfig";

export const getSong = async (sid) => {
  const response = await axiosConfig({
    url: "/song",
    method: "get",
    params: { id: sid },
  });
  // console.log(response)
  return response;
};

export const getDetailSong = async (sid) => {
  const response = await axiosConfig({
    url: "/infosong",
    method: "get",
    params: { id: sid },
  });
  return response;
};