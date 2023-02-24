import React from 'react';
import actionTypes from "../Action/actionType";

const initState = {
    homeData: [1,1,3],
    test: 'hello123'
}

const TimeReducer = (state = initState,action) => {
    switch (action.type){
        case actionTypes.GET_HOME:
            return state
        default:
            return state
    }
};

export default TimeReducer;