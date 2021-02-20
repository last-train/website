import React from "react"
import styled from "styled-components"

const Container = styled.footer`
  background-color: ${({ theme }) => theme.footer};
  padding: 2em 6em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 2px solid #33333320;
  position: relative;
  @media (max-width: 700px) {
    flex-direction: column;
    padding: 1em 2em;
  }
`

const Link = styled.a`
  color: ${({ theme }) => theme.link};
  font-size: 1em;
  text-decoration: none;
  display: block;
  font-weight: 100;
  transition: all 200ms ease-in;

  :hover {
    color: white;
  }
`

const Text = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 1em;
  font-weight: 100;
  text-align: right;
  display: block;
  margin: 1em 0;

  @media (max-width: 700px) {
    text-align: center;
  }

  &:before {
    border-top: 2px solid #feb80a;
    display: block;
    width: 100%;
    content: "";
    margin: 0 auto 1em;
  }
`

const Links = styled.div`
  text-align: left;
  margin: 1em 0;

  @media (max-width: 700px) {
    text-align: center;
  }

  &:before {
    border-top: 2px solid #feb80a;
    display: block;
    width: 100%;
    content: "";
    margin: 0 auto 1em;
    text-align: center;
  }
`

const Footer = () => (
  <Container>
    <Links>
      <Link href="https://open.spotify.com/show/2qY1TaOVeRsD60wRcxnmUu">
        Spotify
      </Link>
      <Link href="https://podcasts.apple.com/us/podcast/the-last-train/id1525143328">
        Apple Podcasts
      </Link>
      <Link href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8yZGMwMmNjYy9wb2RjYXN0L3Jzcw==">
        Google Podcasts
      </Link>
      <Link href="https://anchor.fm/s/2dc02ccc/podcast/rss">RSS</Link>
      <Link href="https://anchor.fm/lasttrainpod">Anchor</Link>
      <Link href="https://twitter.com/lasttrainpod">Twitter</Link>
      <Link href="https://www.instagram.com/lasttrainpod">Instagram</Link>
    </Links>
    <Text>
      Copyright © {new Date().getFullYear()} Last Train Podcast
      <br />
      <Link href="mailto:hello@thelasttrain.fm">hello@thelasttrain.fm</Link>
    </Text>
  </Container>
)

export default Footer
