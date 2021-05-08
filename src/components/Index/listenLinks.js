import React from "react"
import styled from "styled-components"
import itunes from "../../images/listen_links/apple.png"
import breaker from "../../images/listen_links/breaker.png"
import googlePodcasts from "../../images/listen_links/google.png"
import overcast from "../../images/listen_links/overcast.png"
import pocketCasts from "../../images/listen_links/pocketcasts.png"
import radioPublic from "../../images/listen_links/radiopublic.png"
import spotify from "../../images/listen_links/spotify.png"

const ListenLinksList = styled.div`
  padding: 25px;

  @media (max-width: 400px) {
    padding: 15px;
  }
`

const ListenLinksHeader = styled.span`
  font-weight: 600;
  font-size: 17px;
  display: block;
  text-transform: uppercase;
  padding: 10px 20px;
`

const LinkLogo = styled.img`
  height: 3rem;

  padding: 5px 7px;

  :hover {
    transform: translateY(-5px);
    transition: all 0.3s ease-in;
  }

  @media (max-width: 400px) {
    height: 2.7rem;
  }
`

const listenLinks = {
  itunes: "https://podcasts.apple.com/us/podcast/the-last-train/id1525143328",
  breaker: "https://www.breaker.audio/the-last-train",
  googlePodcasts:
    "https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8yZGMwMmNjYy9wb2RjYXN0L3Jzcw==",
  overcast: "https://overcast.fm/itunes1525143328/the-last-train",
  pocketCasts: "https://pca.st/s30qdy5g",
  radioPublic: "https://radiopublic.com/the-last-train-WeNrxR",
  spotify: "https://open.spotify.com/show/2qY1TaOVeRsD60wRcxnmUu",
}

export default function ListenLinks() {
  return (
    <ListenLinksList>
      <ListenLinksHeader>Where To Listen</ListenLinksHeader>
      <a href={listenLinks["itunes"]}>
        <LinkLogo src={itunes} alt="logo" />
      </a>
      <a href={listenLinks["breaker"]}>
        <LinkLogo src={breaker} alt="logo" />
      </a>
      <a href={listenLinks["googlePodcasts"]}>
        <LinkLogo src={googlePodcasts} alt="logo" />
      </a>
      <a href={listenLinks["overcast"]}>
        <LinkLogo src={overcast} alt="logo" />
      </a>
      <a href={listenLinks["pocketCasts"]}>
        <LinkLogo src={pocketCasts} alt="logo" />
      </a>
      <a href={listenLinks["radioPublic"]}>
        <LinkLogo src={radioPublic} alt="logo" />
      </a>
      <a href={listenLinks["spotify"]}>
        <LinkLogo src={spotify} alt="logo" />
      </a>
    </ListenLinksList>
  )
}
