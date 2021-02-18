import React from "react"
import "./layout.scss"
import Footer from "./footer"
import Navbar from "./Navbar/Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
