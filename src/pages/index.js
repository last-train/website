import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Landing from "../components/Index/landing"
import Podcast from "../components/Index/podcast"
import Hosts from "../components/Index/hosts"

import Toggle from "../components/Toggler";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "../components/useDarkMode";
import { GlobalStyles } from "../components/globalStyles";
import { lightTheme, darkTheme } from "../components/Themes";

const IndexPage = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if(!mountedComponent) return <div/>

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles/>
      <Layout>
        <Toggle theme={theme} toggleTheme={themeToggler} />
        <SEO title="The Last Train Podcast" />
        <Landing theme={theme} />
        <Podcast theme={theme} />
        <Hosts theme={theme} />
      </Layout>
    </ThemeProvider>
  )
}

export default IndexPage
