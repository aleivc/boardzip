import {Routes, Route} from "react-router-dom";

import BasicLayout from "./layouts/BasicLayout";
import SignLayout from './layouts/SignLayout';

import Home from "./pages/home/Home";
import SignIn from "./pages/user/SignIn";
import SignUp from "./pages/user/SignUp";
import SkateBoard from "./pages/skates/SkateBoard";

function NotFound() {
    return (<div>not found</div>)
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<BasicLayout/>}>
                <Route index element={<Home/>}/>
                <Route path="home" element={<Home/>}/>
                <Route path="skates" element={<SkateBoard/>}/>
            </Route>
            <Route path="/user/*" element={<SignLayout/>}>
                <Route path="signIn" element={<SignIn/>}/>
                <Route path="signUp" element={<SignUp/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>
            <Route path="/admin/*" element={<SignLayout/>}>
                <Route path="login" element={<SignIn/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
}

export default App;
