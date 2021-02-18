import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import { useHeadingAnimation } from "../../utils/useHeadingAnimation"
import gsap from "gsap"
import { ScrollScene } from "scrollscene"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Container = styled.div`
  background-color: ${({ theme }) => theme.secondaryBackground};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
  flex-direction: column;
  padding: 3em 0;
`

const Wrapper = styled.div`
  margin-top: 3em;
  display: flex;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`

const Person = styled.div`
  display: inline-block;
  padding: 3em;
`

const Avatar = styled(Img)`
  border-radius: 50%;
  height: 200px;
`

const Name = styled.h2`
  font-size: 1em;
  font-weight: 400;
  margin: 1em 0;
  text-align: center;
`

const Link = styled.a`
  color: ${({ theme }) => theme.link};
  font-size: 0.75em;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  display: block;
  margin-bottom: 0.5em;
`

const Heading = styled.h1`
  margin: 0 0 0.25em 0;
  color: ${({ theme }) => theme.text};
  font-size: 4em;
  font-weight: 800;
  @media (max-width: 750px) {
    font-size: 3em;
  }
  @media (max-width: 400px) {
    font-size: 2em;
  }
  &::after {
    border-top: 2px solid #000;
    display: block;
    width: 33.3%;
    content: "";
    margin: 8px auto 0;
  }
`

const Hosts = () => {
  const wrapperRef = useRef()
  const hostsRef = useRef()
  useHeadingAnimation(wrapperRef)

  useEffect(() => {
    const wrapper = wrapperRef.current
    const hosts = hostsRef.current

    gsap.set(hosts, { autoAlpha: 0, scale: 0.95 })

    const tl = gsap.timeline({
      paused: true,
      defaults: { ease: "power3.inOut" },
    })
    tl.to(hosts, { autoAlpha: 1, scale: 1 })

    new ScrollScene({
      triggerElement: wrapper,
      gsap: { timeline: tl },
      offset: wrapper.querySelector("h1").clientHeight,
      triggerHook: 0.5,
    })
  }, [])

  const data = useStaticQuery(graphql`
    query {
      dt: file(relativePath: { eq: "dt.jpeg" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      iyanu: file(relativePath: { eq: "iyanu.jpg" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      julianna: file(relativePath: { eq: "julianna.jpeg" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      tobi: file(relativePath: { eq: "tobi.jpg" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Container id="hosts" ref={wrapperRef}>
      <Heading>Hosts</Heading>
      <Wrapper ref={hostsRef}>
        <Person>
          <Avatar fixed={data.tobi.childImageSharp.fixed} />
          <Name>Tobi</Name>
          <Link href="mailto:tobijonathan94@gmail.com">tobijonathan94@gmail.com</Link>
          <Link href="https://instagram.com/tobi_alexander94">@tobi_alexander94</Link>
        </Person>
        <Person>
          <Avatar fixed={data.iyanu.childImageSharp.fixed} />
          <Name>Iyanu</Name>
          <Link href="mailto:tolu@akindele.ca">tolu@akindele.ca</Link>
          <Link href="https://instagram.com/tolutaughtme">@tolutaughtme</Link>
        </Person>
        <Person>
          <Avatar fixed={data.dt.childImageSharp.fixed} />
          <Name>DT</Name>
          <Link href="mailto:dolapotoki@gmail.com">dolapotoki@gmail.com</Link>
          <Link href="https://twitter.com/dtoki_">@dtoki_</Link>
        </Person>
        <Person>
          <Avatar fixed={data.julianna.childImageSharp.fixed} />
          <Name>Julianna</Name>
          <Link href="mailto:julianna.driedger@gmail.com">julianna.driedger@gmail.com</Link>
          <Link href="https://instagram.com/julianna_akindele">@julianna_akindele</Link>
        </Person>
      </Wrapper>
    </Container>
  )
}

export default Hosts
