import {Outlet, useNavigate} from 'react-router-dom';
import GlobalStyles from "@mui/material/GlobalStyles";
import CssBaseline from "@mui/material/CssBaseline";

import NavBar from './NavBar';

export default function BasicLayout() {
    const navigate = useNavigate();
    return (
        <>
            <GlobalStyles styles={{ul: {margin: 0, padding: 0, listStyle: 'none'}}}/>
            <CssBaseline/>
            <NavBar />
            <main style={{height: 'calc(100% - 65px)'}}>
                <Outlet/>
            </main>
        </>
    )
}