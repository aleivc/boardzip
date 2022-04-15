import {Routes, Route} from "react-router-dom";

import BasicLayout from "./layouts/BasicLayout";
import SignLayout from './layouts/SignLayout';

import Home from "./pages/home/Home";
import Login from "./pages/user/Login";

function NotFound() {
    return (<div>not found</div>)
}

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<BasicLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="home" element={<Home/>}/>
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
        </div>
    );
}

export default App;
