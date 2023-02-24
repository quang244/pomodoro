import React, {useEffect} from 'react';
import axios from "axios"
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {sideBarLeft} from "../component/sideBarLeft";
import GetHome from "../APIs/GetHome";
import {Home} from '../Redux/Action/Home'
import Player from "../component/Player";
import {setCurrentSongID} from "../Redux/Action/setCurrentSongID";

const Music = () => {
    const activeStyle = 'flex text-red-900'
    const dispath = useDispatch()
    const {curSongId} = useSelector(state => state.music)
    useEffect(()=>{
        dispath(setCurrentSongID('Z67U0IE6'))
    },[])

        // console.log(curSongId)

    return (
        <>
            <div className='w-full min-h-screen flex flex-col bg-amber-300'>
                <div className='flex-auto'>
                    {sideBarLeft.map((item) => (
                        <NavLink to={item.path}
                                 className={ ({isActive}) => isActive ? activeStyle : "flex" }
                                 key={item.path}
                        >
                            {item.icons}
                            <span>{item.text}</span>

                        </NavLink>
                    ))}
                </div>

                <button onClick={()=> dispath(setCurrentSongID('Z67U0IE6'))}
                >
                    a
                    {/*{console.log(curSongId)}*/}
                </button>

                <button onClick={()=> dispath(setCurrentSongID('bb'))}
                >
                    b
                    {/*{console.log(curSongId)}*/}
                </button>

                <div className=" flex-none h-[90px]">
                    <Player />
                </div>

                {/*<GetHome/>*/}
            </div>
        </>
    );
};

export default Music;