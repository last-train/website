import React, { useState } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import List from "../components/Archive/list"
import Episode from "../components/Archive/episode"
import ThemeContext from "../context/theme-context"

import { ThemeProvider } from "styled-components";
import { useDarkMode } from "../components/useDarkMode";
import { GlobalStyles } from "../components/globalStyles";
import { lightTheme, darkTheme } from "../components/Themes";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 25px;

  @media screen and (max-width: 1200px) {
    height: unset;
    min-height: 100vh;
    flex-direction: column;
    justify-content: flex-start;
  }

  @media screen and (max-width: 800px) {
    padding: 0;
  }
`

const Archive = ({ data }) => {
  const episode = data.anchorEpisode
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if(!mountedComponent) return <div/>

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles/>
      <ThemeContext.Provider value={{themeToggler: themeToggler}}>
        <Layout>
          <SEO title={episode.title} />
          <Wrapper>
            <List />
            <Episode episode={episode} />
          </Wrapper>
        </Layout>
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}

export const query = graphql`
  query EpisodeQuery($id: String) {
    anchorEpisode(id: { eq: $id }) {
      id
      isoDate(formatString: "dddd MMMM Do, YYYY")
      title
      content
      enclosure {
        url
      }
    }
  }
`

export default Archive
