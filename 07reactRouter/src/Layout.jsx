import React from 'react'
import Header from './Components/Header/Header'
import Footter from './Components/Footter/Footter'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footter />
    </>
  )
}

export default Layout
