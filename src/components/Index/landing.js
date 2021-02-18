import React from "react"
import styled, { keyframes } from "styled-components"
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
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
  background-position: center;
  background-size: cover;
  flex-direction: column;

  &::after {
    content: "⌄";
    font-weight: 100;
    position: absolute;
    opacity: 0.8;
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

  @media (max-width: 768px) {
    height: 92vh;
  }
`

const Subtitle = styled.h2`
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
  z-index: -1;
  animation: ${animateWave} 1000ms cubic-bezier(0.23, 1, 0.32, 1) forwards;

  @media (max-height: 550px) {
    display: none;
  }
`

const Path = styled.path`
  fill: ${({ theme }) => theme.secondaryBackground};
`

const Landing = (props) => {
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
      <Title>The Last Train Podcast</Title>
      <Subtitle>{siteMetadata.description}</Subtitle>
      {/* <Transition xmlns="http://www.w3.org/2000/svg" viewBox="0 -60 1440 320"><Path fill-opacity="1" d="M0,96L30,112C60,128,120,160,180,176C240,192,300,192,360,176C420,160,480,128,540,128C600,128,660,160,720,149.3C780,139,840,85,900,58.7C960,32,1020,32,1080,64C1140,96,1200,160,1260,165.3C1320,171,1380,117,1410,90.7L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></Path></Transition> */}
      <Transition xmlns="http://www.w3.org/2000/svg" viewBox="0 -60 1440 320"><Path fill-opacity="1" d="M0,256L48,218.7C96,181,192,107,288,106.7C384,107,480,181,576,176C672,171,768,85,864,48C960,11,1056,21,1152,37.3C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></Path></Transition>
    </Container>
  )
}

export default Landing
