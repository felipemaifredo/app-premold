import { Outlet } from "react-router-dom"
import { Navbar } from "../ui/components/Navbar"
import { Footer } from "../ui/components/Footer"
export function DefaultLayout() {
    return (
        <>  
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}