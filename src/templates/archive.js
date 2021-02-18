import React, { useState } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import List from "../components/Archive/list"
import Episode from "../components/Archive/episode"

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
  const episode = data.file.childMarkdownRemark
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if(!mountedComponent) return <div/>

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles/>
      <Layout>
        <SEO title={episode.frontmatter.title} />
        <Wrapper>
          <List />
          <Episode episode={episode} />
        </Wrapper>
      </Layout>
    </ThemeProvider>
  )
}

export const query = graphql`
  query EpisodeQuery($id: String!) {
    file(id: { eq: $id }) {
      childMarkdownRemark {
        frontmatter {
          youtubeUrl
          title
          spotifyUrl
          slug
          shortDescription
          publicationDate
          audioUrl
        }
        html
      }
    }
  }
`

export default Archive
