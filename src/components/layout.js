import React from "react"

import "./layout.scss"

import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}

export default Layout
