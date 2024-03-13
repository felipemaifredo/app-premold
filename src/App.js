//Imports
import { Route, Routes, Navigate, useNavigate, HashRouter, BrowserRouter } from "react-router-dom"

import { useState, useEffect } from 'react'
import { auth } from "./lib/FirebaseConfig"
//Layouts
import { DefaultLayout } from "./layouts/DefaultLayout"
import { DefaultAdminLayout } from "./layouts/DefaultAdminLayout"
//Pages
//Public
import { Home } from "./ui/pages/Home"
import { Login } from "./ui/pages/Adm/Login"
//Private
import { HomeAdm } from "./ui/pages/Adm/HomeAdm"

export function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    // Verifica se o usuário está autenticado
    auth.onAuthStateChanged((user) => {
      if (user) {
        handleLoggin()
      } else {
        setLoggedIn(false)

      }
    })
  }, [loggedIn])

  function handleLoggin() {
    setLoggedIn(true)
  }
  
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/admin" element={<DefaultAdminLayout />}>
          <Route path="/admin/login" element={ <Login handleLoggin={handleLoggin} /> } />
          <Route path="/admin/home" element={(loggedIn ? <HomeAdm /> : <Navigate to="/admin/login" />)} />
        </Route>
      </Routes>
    </HashRouter>
  )
}