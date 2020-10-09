import React from "react"
import styled, { keyframes } from "styled-components"

import background from "../../images/background_2.jpeg"
import the_crew from "../../images/the_crew_transparent.png"
import { useStaticQuery, graphql } from "gatsby"

const bounce = keyframes`
	50% {
    transform: translateY(-50%);
  }
  100% {
    transform: translateY(0);
  }
`

const animateWave = keyframes`
  0% {
    transform: scale(1,0);
  }
  100% {
    transform: scale(1,1);
  }
`

const Title = styled.h1`
  margin: 0 0 0.25em 0;
  color: #000000;
  font-size: 5em;
  font-weight: 800;

  @media (max-width: 750px) {
    font-size: 4em;
  }
  @media (max-width: 400px) {
    font-size: 3em;
  }
`

const Container = styled.header`
  background-color: #feb80a;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
  // background-image: url(${background});
  background-position: center;
  background-size: cover;
  flex-direction: column;

  &::after {
    content: "⌄";
    font-weight: 100;
    color: #000000;
    position: absolute;
    opacity: 0.8;
    text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
    font-size: 5rem;
    height: 4rem;
    text-align: center;
    bottom: 2rem;
    margin: 0 auto;
    animation: ${bounce} 1s ease infinite;

    @media (max-height: 550px) {
      display: none;
    }
  }
`

const Subtitle = styled.h2`
  color: #000000;
  font-size: 1.5em;
  font-weight: 400;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 0 2em;
  @media (max-width: 750px) {
    font-size: 1em;
  }
`
const Transition = styled.svg`
  display: block;
  position: absolute;
  bottom: 0rem;
  transform-origin: bottom;
  animation: ${animateWave} 1000ms cubic-bezier(0.23, 1, 0.32, 1) forwards;
`

const Landing = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
        }
      }
    }
  `)

  return (
    <Container>
      {/* <div className="row">
        <div className="logo" style={{ margin: "0 0 1em 0" }}>
          <img src={the_crew} height="100px" />
        </div>
      </div> */}
      <Title>The Last Train Podcast</Title>
      <Subtitle>{siteMetadata.description}</Subtitle>
      <Transition xmlns="http://www.w3.org/2000/svg" viewBox="0 -60 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,256L48,218.7C96,181,192,107,288,106.7C384,107,480,181,576,176C672,171,768,85,864,48C960,11,1056,21,1152,37.3C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></Transition>
    </Container>
  )
}

export default Landing
