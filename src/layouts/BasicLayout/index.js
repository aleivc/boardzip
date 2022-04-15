import {Outlet, useNavigate} from 'react-router-dom';
import GlobalStyles from "@mui/material/GlobalStyles";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

export default function BasicLayout() {
    const navigate = useNavigate();
    return (
        <>
            <GlobalStyles styles={{ul: {margin: 0, padding: 0, listStyle: 'none'}}}/>
            <CssBaseline/>
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{borderBottom: (theme) => `1px solid ${theme.palette.divider}`}}
            >
                <Toolbar sx={{flexWrap: 'wrap'}}>
                    <Typography
                        variant="h6" color="primary" noWrap sx={{flexGrow: 1}}>
                        <Link
                            onClick={() => {
                                navigate('/')
                            }}
                            variant="h6"
                            color="text.primary"
                            href=""
                            sx={{my: 1, mx: 1.5}}
                        >
                            Board Zip
                        </Link>
                    </Typography>
                    <nav>
                        <Link
                            onClick={() => {
                                navigate('/skates')
                            }}
                            variant="button"
                            color="text.primary"
                            href=""
                            sx={{my: 1, mx: 1.5}}
                        >
                            SkateBoard
                        </Link>
                    </nav>
                    <Button
                        onClick={() => {
                            navigate('/user/signIn')
                        }}
                        href="" variant="outlined" sx={{my: 1, mx: 1.5}}>
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
            <main style={{height: 'calc(100% - 65px)'}}>
                <Outlet/>
            </main>
        </>
    )
}