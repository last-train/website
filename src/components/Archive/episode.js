import React from "react"
import styled from "styled-components"
import Player from "../Player/player"
import background from "../../images/episode_bg.svg"

const Wrapper = styled.article`
  background-image: url(${background});
  background-repeat: no-repeat;
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
    color: ${({ theme }) => theme.link};
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

const ContentContainer = styled.div`
  padding: 25px;
  flex: 1;
  overflow-y: auto;
  display: flex;
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
  font-size: 2em;
  font-weight: 800;
  display: inline-block;
  width: 100%;
`

const EpisodeImageDiv = styled.div`
  width: 40%;
  margin-right: 25px;
`

const EpisodeImage = styled.img`
  box-shadow: 0 0 10px #000;
  width: 100%;
`

const EpisodeContentDiv = styled.div`
  flex: 1;
`

const EpisodeContent = styled.div``

const EpisodeDate = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.textV2};
`

function getDownloadLink(link) {
  const [uri] = link.split("/").slice(-1)
  return decodeURIComponent(uri)
}

const Episode = ({ episode }) => (
  <Wrapper>
    <Player url={episode.enclosure.url} />
    <ContentContainer>
      <EpisodeImageDiv>
        <EpisodeImage src={episode.itunes.image} alt={episode.title} />
      </EpisodeImageDiv>
      <EpisodeContentDiv>
        <EpisodeDate>{episode.isoDate}</EpisodeDate>
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
        <EpisodeContent
          dangerouslySetInnerHTML={{
            __html: episode.content,
          }}
        />
      </EpisodeContentDiv>
    </ContentContainer>
  </Wrapper>
)

export default Episode
