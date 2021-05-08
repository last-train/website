import React from "react"
import "./layout.css"
import Footer from "./footer"
import Navbar from "./Navbar/Navbar"
import styled, { css } from "styled-components"

const StyledLayout = styled.div`
  position: unset;

  ${(props) =>
    props.navbarOpen &&
    css`
      position: fixed;
    `};
`

// const navbarOpen = false

const Layout = (props) => {
  return (
    <StyledLayout>
      <Navbar isHome={props.isHome} />
      {props.children}
      <Footer />
    </StyledLayout>
  )
}

export default Layout
