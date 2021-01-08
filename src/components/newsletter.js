import React from "react"
import styled from "styled-components"

const Wrapper = styled.a`
  display: none;
  text-decoration: none;
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 20px;
  background-color: #000000;
  color: white;
  z-index: 10;
  transition: 0.3s ease;
  max-width: 400px;

  :hover,
  :focus {
    box-shadow: 0px 0px 0px 3px #feb80a;
  }

  @media (max-width: 700px) {
    visibility: hidden;
  }
`

const RedText = styled.span`
  color: #feb80a;
`

const Newsletter = () => (
  <Wrapper href="https://letter.podcast.gq">
    Zapisz się do <RedText>require('letter')</RedText> - newslettera prosto od
    The Last Train Podcast ✉️
  </Wrapper>
)

export default Newsletter
