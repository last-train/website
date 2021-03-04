import React from "react"
import "./layout.css"
import Footer from "./footer"
import Navbar from "./Navbar/Navbar"

const Layout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
