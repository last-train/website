import React from "react"
import "./layout.css"
import Footer from "./footer"
import Navbar from "./Navbar/Navbar"

const Layout = (props) => {
  return (
    <>
      <Navbar toggleTheme={props.toggleTheme} />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
