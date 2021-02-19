import React from "react"
import styled from "styled-components"
import Player from "../Player/player"

const Wrapper = styled.article`
  background-color: #feb80a88;
  height: 100%;
  overflow: hidden;
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;

  h1 {
    margin: 0;
  }

  a {
    color: #000;
  }

  ul,
  ol {
    p {
      margin: 0;
    }
  }

  @media screen and (max-width: 800px) {
    h1 {
      font-size: 1.4em;
    }
  }
`

const ContentConatiner = styled.div`
  padding: 25px;
  flex: 1;
  overflow-y: auto;
`

const EpisodeActionButton = styled.a`
  background-color: #feb80a;
  color: white;
  font-size: 1em;
  font-family: inherit;
  margin: 16px 10px 0 0;
  padding: 5px 15px;
  cursor: pointer;
  display: inline-block;
  height: 31px;
  vertical-align: top;
  display: inline-block;
  text-decoration: none;

  &:hover {
    background-color: #fff;
  }
`
const Heading = styled.h1`
  margin: 0.5em 0;
  color: #000000;
  font-size: 2em;
  font-weight: 800;
  display: inline-block;
  width: 100%;
`

function getDownloadLink(link) {
  const [uri] = link.split("/").slice(-1)
  return decodeURIComponent(uri)
}

const Episode = ({ episode }) => (
  <Wrapper>
    <Player url={episode.enclosure.url} />
    <ContentConatiner>
      <span style={{ fontWeight: "800", color: "#00000088" }}>
        {episode.isoDate}
      </span>
      <Heading>{episode.title}</Heading>
      {/* <EpisodeActionButton
        href={getDownloadLink(episode.enclosure.url)}
        download="download"
      >
        Download Episode{" "}
        <span role="img" aria-label="download icon">
          💾
        </span>
      </EpisodeActionButton> */}
      <div style={{ color: "#000000" }}
        dangerouslySetInnerHTML={{
          __html: episode.content,
        }}
      />
    </ContentConatiner>
  </Wrapper>
)

export default Episode
