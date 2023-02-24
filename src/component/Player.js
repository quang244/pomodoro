import React, {useEffect, useRef, useState} from 'react';
import {useSelector} from "react-redux";
import {getDetailSong, getSong} from "../APIs/GetDetailSong";
import {BiSkipNext,BiSkipPrevious,BiPlay,BiPause} from 'react-icons/bi'
import ReactAudioPlayer from "react-audio-player";
import {nlNL} from "@mui/material/locale";



const Player = () => {
        const [songInfo,setSongInfo] = useState(null)
    const [song,setSong] = useState('')
    const {curSongId} = useSelector(state => state.music)
    const [isPlay,setIsPlay] = useState(true)


    const handlePlay=()=>{
        setIsPlay(!isPlay)
        console.log('but')
    }

    useEffect(()=>{
        const fetchDetailSong = async() => {
            // const response = await getDetailSong(curSongId)
            const response2 = await getSong(curSongId)

            // console.log(response.data.data)
            console.log(response2.data.data[128])

            if(response2.data.err === 0){
                setSong(response2.data.data['128'])
            }
        }

        fetchDetailSong()
    },[curSongId])

    return (
        <div className='s'>
            <div>progress bar</div>
            <ReactAudioPlayer
                autoPlay
                controls
                src={song}
            />

            <div className='flex'>
                <span> <BiSkipPrevious size={30}/> </span>
                <span onClick={() => handlePlay()}>
                    {isPlay ? <BiPlay size={30}/> :  <BiPause size={30}/> }
                </span>
                <span> <BiSkipNext size={30}/> </span>
            </div>
            <div>volume</div>
        </div>
    );
};

export default Player;
