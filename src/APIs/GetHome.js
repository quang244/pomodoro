import React, {useEffect} from 'react';
import axios from "axios";
import axiosConfig from "../AxiosConfig";


const GetHome = () => {                     //lấy data cho trang home
    useEffect(() => {
        const fetchData = async() => {
            const responce = await axiosConfig({
                url: '/home',
                method: 'get'
            })
            console.log(responce.data.data.items[0].items[1].encodeId)
        }
        fetchData()
    },[])
};

export default GetHome;
