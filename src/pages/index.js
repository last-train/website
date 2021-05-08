import React, { useEffect } from "react"
import { useLocation } from "@reach/router"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Landing from "../components/Index/landing"
import Podcast from "../components/Index/podcast"
import Hosts from "../components/Index/hosts"
import ThemeContext from "../context/theme-context"

import { ThemeProvider } from "styled-components"
import { useDarkMode } from "../components/useDarkMode"
import { GlobalStyles } from "../components/globalStyles"
import { lightTheme, darkTheme } from "../components/Themes"

const IndexPage = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode()
  const themeMode = theme === "light" ? lightTheme : darkTheme
  const location = useLocation()
  const isHome = location.pathname === "/"

  // Sets target="_blank" rel="noopener noreferrer" on external links
  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll("a"))
    if (allLinks.length > 0) {
      allLinks.forEach((link) => {
        if (link.host !== window.location.host) {
          link.setAttribute("rel", "noopener noreferrer")
          link.setAttribute("target", "_blank")
        }
      })
    }
  }

  useEffect(() => {
    const id = location.hash.substring(1) // location.hash without the '#'
    setTimeout(() => {
      const el = document.getElementById(id || "landing")
      if (el) {
        el.scrollIntoView()
        el.focus()
      }
    }, 0)

    handleExternalLinks()
  }, [])

  if (!mountedComponent) return <div />

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <ThemeContext.Provider
        value={{ themeToggler: themeToggler, theme: theme }}
      >
        <Layout isHome={isHome}>
          <SEO title="Last Train Podcast" />
          <Landing />
          <Podcast />
          <Hosts />
        </Layout>
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}

export default IndexPage
