//Imports
import { Route, Routes, Navigate, HashRouter, BrowserRouter } from "react-router-dom"

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
import { FrequentlyQuestions } from "./ui/pages/Adm/FrequentlyQuestions"
import { Banners } from "./ui/pages/Adm/Banners"
import { ServicesMade } from "./ui/pages/Adm/ServicesMade"
import { ServicesOffer } from "./ui/pages/Adm/ServicesOffer"

export function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  useEffect(() => {
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/admin/login" element={<Login handleLoggin={handleLoggin} />} />
        </Route>
        <Route path="/admin" element={<DefaultAdminLayout />}>
          <Route path="/admin/home" element={(loggedIn ? <HomeAdm /> : <Navigate to="/admin/login" />)} />
          <Route path="/admin/servicos-oferecidos" element={(loggedIn ? <ServicesOffer /> : <Navigate to="/admin/login" />)} />
          <Route path="/admin/servicos-feitos" element={(loggedIn ? <ServicesMade /> : <Navigate to="/admin/login" />)} />
          <Route path="/admin/banners" element={(loggedIn ? <Banners /> : <Navigate to="/admin/login" />)} />
          <Route path="/admin/perguntas-frequentes" element={(loggedIn ? <FrequentlyQuestions /> : <Navigate to="/admin/login" />)} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}