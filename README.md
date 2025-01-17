# [Last Train 🎙](https://thelasttrain.fm)

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fthelasttrain.fm%2F)](https://thelasttrain.fm)
[![Built with Gatsby](https://img.shields.io/badge/built%20with-gatsby-%23663399)](https://www.gatsbyjs.org/)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)
[![Twitter](https://img.shields.io/twitter/follow/lasttrainpod?style=social)](https://twitter.com/intent/follow?screen_name=lasttrainpod)

## Prerequisites

- node
- gatsby
- nvm (node version manager)

## Develop

To run your local dev server

```
nvm use
gatsby develop
```

## Build

To build your gatsby site

```
npm install
gatsby build
```

## Scheduled Actions

- [Scheduled Rebuild](https://github.com/last-train/website/actions/workflows/scheduled-rebuild.yml)
    - There is a GitHub Action scheduled for every Friday at 08:30AM UTC. The action rebuilds for firebase so that the newest episode can be pulled / created.
