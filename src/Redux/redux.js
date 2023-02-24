import React from 'react';
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./Reducer/rootReducer";
import thunk from "redux-thunk"

const reduxConfig = () => {
    const store = createStore(rootReducer,applyMiddleware(thunk))
    return store
};

export default reduxConfig;