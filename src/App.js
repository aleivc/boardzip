import {Routes, Route} from "react-router-dom";

import BasicLayout from "./layouts/BasicLayout";
import SignLayout from './layouts/SignLayout';

import Home from "./pages/home/Home";
import Login from "./pages/user/Login";
import SkateBoard from "./pages/product/SkateBoard";

function NotFound() {
    return (<div>not found</div>)
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<BasicLayout/>}>
                <Route index element={<Home/>}/>
                <Route path="home" element={<Home/>}/>
                <Route path="product" element={<SkateBoard/>}/>
            </Route>
            <Route path="/user/*" element={<SignLayout/>}>
                <Route path="login" element={<Login/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>
            <Route path="/admin/*" element={<SignLayout/>}>
                <Route path="login" element={<Login/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
}

export default App;
