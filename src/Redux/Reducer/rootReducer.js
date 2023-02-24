import React from 'react';
import TimeReducer from "./TimeReducer";
import {combineReducers} from "redux";
import MusicReducer from "./MusicReducer";

const RootReducer = combineReducers({
    app: TimeReducer,
    music: MusicReducer,
})

export default RootReducer;