//Imports
import { Route, Routes, Navigate, HashRouter } from "react-router-dom"

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
import { AddBanner } from "./ui/pages/Adm/AddBanner"
import { AddQuestions } from "./ui/pages/Adm/AddQuestions"
import { AddServicesMade } from "./ui/pages/Adm/AddServicesMade"
import { EditBanner } from "./ui/pages/Adm/EditBanner"
import { EditQuestion } from "./ui/pages/Adm/EditQuestion"
import { EditServiceMade } from "./ui/pages/Adm/EditServiceMade"

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
    <HashRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/admin/login" element={<Login handleLoggin={handleLoggin} />} />
        <Route path="/admin" element={<DefaultAdminLayout />}>
          <Route path="/admin/home" element={(loggedIn ? <HomeAdm /> : <Navigate to="/admin/login" />)} />
          <Route path="/admin/servicos-feitos" element={(loggedIn ? <ServicesMade /> : <Navigate to="/admin/login" />)} />
          <Route path="/admin/servicos-feitos/add" element={(loggedIn ? <AddServicesMade /> : <Navigate to="/admin/login" />)} />
          <Route path="/admin/servicos-feitos/editar/:id" element={(loggedIn ? <EditServiceMade /> : <Navigate to="/admin/login" />)} />
          <Route path="/admin/banners" element={(loggedIn ? <Banners /> : <Navigate to="/admin/login" />)} />
          <Route path="/admin/banners/add" element={(loggedIn ? <AddBanner /> : <Navigate to="/admin/login" />)} />
          <Route path="/admin/banners/editar/:id" element={(loggedIn ? <EditBanner /> : <Navigate to="/admin/login" />)} />
          <Route path="/admin/perguntas-frequentes" element={(loggedIn ? <FrequentlyQuestions /> : <Navigate to="/admin/login" />)} />
          <Route path="/admin/perguntas-frequentes/add" element={(loggedIn ? <AddQuestions /> : <Navigate to="/admin/login" />)} />
          <Route path="/admin/perguntas-frequentes/editar/:id" element={(loggedIn ? <EditQuestion /> : <Navigate to="/admin/login" />)} />
        </Route>
      </Routes>
    </HashRouter>
  )
}