import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"
import NavbarLinks from "./NavbarLinks"
import Logo from "./Logo"
import "./Navbar.css"
import useScrollDirection from "../../hooks/useScrollDirection"

const Navigation = styled.nav`
  height: 70px;
  display: flex;
  background-color: transparent;
  position: fixed;
  width: 100%;
  justify-content: space-between;
  text-transform: uppercase;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-self: center;

  top: 0;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  ${(props) =>
    props.scrollDirection === "up" &&
    !props.scrolledToTop &&
    css`
      height: 70px;
      transform: translateY(0px);
      background-color: ${({ theme }) => theme.navBar};
      box-shadow: 0 10px 30px -10px ${({ theme }) => theme.navFooterBorder};
    `};

  ${(props) =>
    props.scrollDirection === "down" &&
    !props.scrolledToTop &&
    css`
      height: 70px;
      transform: translateY(calc(70px * -1));
      box-shadow: 0 10px 30px -10px ${({ theme }) => theme.navFooterBorder};
    `};

  ${(props) =>
    props.navbarOpen &&
    css`
      transform: unset;
    `};
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0;
  z-index: 9;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: ${({ theme }) => theme.navBar};
    transition: all 0.3s ease-in;
    left: ${(props) => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: ${({ theme }) => theme.text};
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${(props) => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: ${({ theme }) => theme.text};
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${(props) =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${(props) => (props.open ? "0" : "1")};
    transform: ${(props) => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`

const Navbar = (props) => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(!props.isHome)
  const scrollDirection = useScrollDirection("down")
  const [scrolledToTop, setScrolledToTop] = useState(true)

  const navbarLinkHandler = () => {
    setNavbarOpen(false)
  }

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true)
    }, 100)

    window.addEventListener("scroll", handleScroll)

    return () => {
      clearTimeout(timeout)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <Navigation
      navbarOpen={navbarOpen}
      scrollDirection={scrollDirection}
      scrolledToTop={scrolledToTop}
    >
      <Logo />
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks navbarLinkHandler={navbarLinkHandler} />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks navbarLinkHandler={navbarLinkHandler} />
        </Navbox>
      )}
    </Navigation>
  )
}

export default Navbar
