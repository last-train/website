import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Landing from "../components/Index/landing"
import Podcast from "../components/Index/podcast"
import Hosts from "../components/Index/hosts"

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../components/globalStyles";
import { lightTheme, darkTheme } from "../components/Themes";

const IndexPage = () => {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <Layout>
        <button onClick={themeToggler}>Switch Theme</button>
        <SEO title="The Last Train Podcast" />
        <Landing />
        <Podcast />
        <Hosts />
      </Layout>
    </ThemeProvider>
  )
}

export default IndexPage
