import React, { useState } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Landing from '../components/Index/landing'
import Podcast from '../components/Index/podcast'
import Hosts from '../components/Index/hosts'
import ThemeContext from '../context/theme-context'

import { ThemeProvider } from 'styled-components';
import { useDarkMode } from '../components/useDarkMode';
import { GlobalStyles } from '../components/globalStyles';
import { lightTheme, darkTheme } from '../components/Themes';

const IndexPage = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if(!mountedComponent) return <div/>

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles/>
      <ThemeContext.Provider value={{themeToggler: themeToggler, theme: theme}}>
        <Layout>
          <SEO title='Last Train Podcast' />
          <Landing />
          <Podcast />
          <Hosts />
        </Layout>
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}

export default IndexPage
