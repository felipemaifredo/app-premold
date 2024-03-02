import { Outlet } from "react-router-dom"

export function DefaultAdminLayout() {
    return (
        <>
            <p>Outleeeet Admiiin</p>
            <Outlet />
        </>
    )
}