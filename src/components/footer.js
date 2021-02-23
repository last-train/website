import React from "react"
import styled from "styled-components"

const Container = styled.footer`
  background-color: ${({ theme }) => theme.footer};
  padding: 2em 6em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 2px solid ${({ theme }) => theme.navFooterBorder};
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
    color: ${({ theme }) => theme.text};
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
      <Link href="https://www.instagram.com/lasttrainpod">Instagram</Link>
      <Link href="https://twitter.com/lasttrainpod">Twitter</Link>
      <Link href="https://anchor.fm/lasttrainpod">Anchor</Link>
      <Link href="https://anchor.fm/s/2dc02ccc/podcast/rss">RSS</Link>
    </Links>
    <Text>
      Copyright © {new Date().getFullYear()} Last Train Podcast
      <br />
      <Link href="mailto:hello@thelasttrain.fm">hello@thelasttrain.fm</Link>
    </Text>
  </Container>
)

export default Footer
