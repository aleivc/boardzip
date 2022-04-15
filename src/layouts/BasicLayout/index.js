import { Outlet } from 'react-router-dom';

export default function BasicLayout () {
    return (
        <div>
            <main>
                <Outlet />
            </main>
        </div>
    )
}