import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <main className="grid min-h-screen w-full place-items-center">
            <Outlet />
        </main>
    )
}
