import Sidebar from "./component/sidebar";
import Main from "./container/public/Main";
import Music from "./music/Music";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import Test from "./Test";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import action from "./Redux/Action/actionType";
import actionTypes from "./Redux/Action/actionType";
import MusicTest from "./component/MusicTest";

function App() {
    // const dispath = useDispatch()
    // useEffect(()=>{
    //     dispath(actionTypes)
    // },[])


    return (
        // <BrowserRouter>
        <Routes>
            <Route path="/*" element={<Sidebar/>}>
                <Route path="pomodoro" element={<Main/>}>
                    <Route path="setting" element={<Test/>}/>
                </Route>
                <Route path='music' element={<MusicTest/>}/>

            </Route>
        </Routes>

    );
}

export default App
