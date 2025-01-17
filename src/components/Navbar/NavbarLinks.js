import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Toggler from "../../components/Toggler"

const NavItem = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: goldenrod;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: goldenrod;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`
const NavbarLinks = (props) => {
  return (
    <>
      <NavItem to="/#podcasts" onClick={props.navbarLinkHandler}>
        Podcasts
      </NavItem>
      <NavItem to="/#hosts" onClick={props.navbarLinkHandler}>
        Hosts
      </NavItem>
      <NavItem to="/archive" onClick={props.navbarLinkHandler}>
        Archive
      </NavItem>
      <Toggler />
    </>
  )
}

export default NavbarLinks
