import React, { useState, useEffect } from "react"
import styled from "styled-components"
import NavbarLinks from "./NavbarLinks"
import Logo from "./Logo"
import "./Navbar.css"

const Navigation = styled.nav`
  height: 10vh;
  min-height: 70px;
  max-height: 90px;
  display: flex;
  background-color: ${({ theme }) => theme.navBar};
  position: fixed;
  width: 100%;
  justify-content: space-between;
  text-transform: uppercase;
  border-bottom: 2px solid ${({ theme }) => theme.navFooterBorder};
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-self: center;

  @media (max-width: 768px) {
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0;

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
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: ${({ theme }) => theme.link};
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: ${({ theme }) => theme.link};
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`

const Navbar = (props) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  var hasTouchScreen = false;
  if (typeof window !== 'undefined') {
    let navigator = window.navigator;
    if ("maxTouchPoints" in navigator) {
      hasTouchScreen = navigator.maxTouchPoints > 0;
    } else if ("msMaxTouchPoints" in navigator) {
        hasTouchScreen = navigator.msMaxTouchPoints > 0;
    } else {
        var mQ = window.matchMedia && matchMedia("(pointer:coarse)");
        if (mQ && mQ.media === "(pointer:coarse)") {
            hasTouchScreen = !!mQ.matches;
        } else if ('orientation' in window) {
            hasTouchScreen = true; // deprecated, but good fallback
        } else {
            // Only as a last resort, fall back to user agent sniffing
            var UA = navigator.userAgent;
            hasTouchScreen = (
                /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
                /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
            );
        }
    }
  }

  function didScroll() {
    let headerElement = document.getElementsByTagName('nav')[0];
    if (typeof window !== 'undefined' && headerElement && !hasTouchScreen) { // to avoid Gatsby error
      var currentScrollPos = window.pageYOffset;

      if (prevScrollPos < currentScrollPos && currentScrollPos != 0) {
        headerElement.classList.add('hidden');
      } else {
        headerElement.classList.add('show');
        headerElement.classList.remove('hidden');
      }
      setPrevScrollPos(currentScrollPos)
    }
  }
  
  // add new listener and remove old listener every time prevScrollPos changes
  useEffect(() => {
    if (typeof window !== 'undefined') { // to avoid Gatsby error
      window.addEventListener("scroll", didScroll);
    }
    return () => window.removeEventListener('scroll', didScroll);
  }, [prevScrollPos]);


  return (
    <Navigation>
      <Logo />
      <Toggle navbarOpen={navbarOpen} onClick={() => setNavbarOpen(!navbarOpen)}>
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox><NavbarLinks /></Navbox>
      ) : (
        <Navbox open><NavbarLinks /></Navbox>
      )}
    </Navigation>
  )
}

export default Navbar