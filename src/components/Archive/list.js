import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"

const Wrapper = styled.aside`
  height: 100%;
  width: 500px;
  flex-shrink: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 10px;
  text-align: center;

  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 400px;
  }
`

const Heading = styled.h1`
  margin: 0.5em 0;
  font-size: 2.5em;
  font-weight: 800;
  display: inline-block;
  width: 100%;

  &::after {
    border-top: 2px solid #feb80a;
    display: block;
    width: 33.3%;
    content: "";
    margin: 4px auto 0;
  }
`

const ListItem = styled.div`
  padding: 10px;
  border-bottom: 2px solid #feb80a;

  &:last-of-type {
    border-bottom: none;
  }
`

const ListContainer = styled.div`
  overflow: auto;
  flex: 1;
  text-align: left;
`

const ItemHeading = styled(Link)`
  display: block;
  cursor: pointer;
  font-size: 1.2em;
  font-weight: 800;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  margin: 0;

  :hover {
    text-decoration: underline;
  }
`

const ItemSubHeading = styled.p`
  font-weight: 600;
  color: ${({ theme }) => theme.textV2};
  margin: 0;
`

const List = (props) => {
  const data = useStaticQuery(graphql`
    query EpisodeList {
      allAnchorEpisode(sort: {order: ASC, fields: isoDate}) {
        nodes {
          id
          isoDate(formatString: "dddd MMMM Do, YYYY")
          title
          content
        }
      }
    }
  `)

  const episodes = data.allAnchorEpisode.nodes

  return (
    <Wrapper>
      <Heading>Episodes</Heading>
      <ListContainer>
        {episodes
          .map((episode) => (
            <ListItem key={episode.id}>
              <ItemHeading to={`/archive/${episode.id}`}>
                {episode.title}
              </ItemHeading>
              <ItemSubHeading>
                {" "}
                {episode.isoDate}
              </ItemSubHeading>
              <p style={{ color: ({ theme }) => theme.text, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html: episode.content,
                }}>
              </p>
            </ListItem>
          ))
          .reverse()}
      </ListContainer>
    </Wrapper>
  )
}

export default List
