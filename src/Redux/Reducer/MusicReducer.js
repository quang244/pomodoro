import React from 'react';
import actionTypes from "../Action/actionType";
const initState = {
    curSongId: null
}

const MusicReducer = (state = initState,action) => {
    switch (action.type){
        case 'SET_SONG' :
            return {
                ...state,
                curSongId: action.sid
            }

        default :
            return state
    }
}

export default MusicReducer;
