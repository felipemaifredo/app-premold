import { Outlet } from "react-router-dom"

export function DefaultLayout() {
    return (
        <>
            <p>Outleeeet</p>
            <Outlet />
        </>
    )
}