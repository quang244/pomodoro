import React, {useEffect, useState} from 'react';
import {colors} from "@mui/material";

const PomoTime = (props) => {
    const listChoose = ["pomo", "short", "pomo", "short", "pomo", "short", "pomo", "long"]
    const {index, running, setIndex, setTime, time, setRun, done, ...rest} = props;
    const {second, minutes} = time;


    useEffect(() => {
        let timer
        const handleUpdateClock = () => {
            if (minutes === 0 && second === 0) {
                rest.setValue(listChoose[index])
                setRun(false)
                rest.setDone(true)
                if (index === 7) {
                    setIndex(0)
                } else {
                    setIndex(index + 1)
                }

                switch (listChoose[index]) {
                    case "long" :
                        setTime({second: 0, minutes: 10})
                        rest.setChoose("long")
                        break
                    case "short":
                        setTime({second: 0, minutes: 5})
                        rest.setChoose("short")
                        break
                    case "pomo" :
                        setTime({second: 0, minutes: 25})
                        rest.setChoose("pomo")
                        break
                }
            } else {
                setTime({...time, second: second - 1})
                if (second === 0) {
                    setTime({second: 59, minutes: minutes - 1})
                }
            }
        }

        if (running) {
            timer = setInterval(handleUpdateClock, 0.1)
        }

        return () => {
            clearInterval(timer)
        }
    }, [second, running])

    return (
        <div className="pomo-time">
            <h1 style={{fontSize: 80, fontWeight: 1600}}>
                {minutes < 10 ? "0" + minutes : minutes} : {second < 10 ? "0" + second : second}
            </h1>
        </div>
    );
};

export default PomoTime;