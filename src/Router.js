//Imports
import { Routes, Route } from "react-router-dom"
//Layouts
import { DefaultLayout } from "./layouts/DefaultLayout"
import { DefaultAdminLayout } from "./layouts/DefaultAdminLayout"
//Pages
//Public
import { Home } from "./ui/pages/Home"
import { Teste } from "./ui/pages/Teste"
//Private

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/teste" element={<Teste />} />
                <Route path="/teste/aaaaa" element={<Teste />} />
            </Route>
            <Route path="/admin" element={<DefaultAdminLayout />}>
                <Route path="/admin/home" element={<Home />} />
            </Route>
        </Routes>
    )
}