import Sidebar from "./component/sidebar";
import Main from "./container/POMODORO/Main";
import { Routes, Route } from "react-router-dom";
import Test from "./Test";
import MusicTest from "./component/MusicTest";
import Login from "./container/Login";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
//
// // Configure Firebase.
// const config = {
//   apiKey: "AIzaSyCcm5OULrmgS1tGGM9JikBgbYCbtnQ6Vss",
//   authDomain: "server-pomodoro.firebaseapp.com",
// };
// firebase.initializeApp(config);

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Sidebar />}>
        <Route path="pomodoro" element={<Main />}>
          <Route path="setting" element={<Test />} />
        </Route>
        <Route path="music" element={<MusicTest />} />
      </Route>
      <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default App;
