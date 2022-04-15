import { Outlet } from 'react-router-dom';

export default function SignLayout () {
    return (
        <div>
            <main>
                <Outlet />
            </main>
        </div>
    )
}