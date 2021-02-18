import React from "react"
import "./layout.css"
import Footer from "./footer"
import Navbar from "./Navbar/Navbar"

const Layout = (props) => {
  return (
    <>
      <Navbar theme={props.theme} toggleTheme={props.toggleTheme} />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
