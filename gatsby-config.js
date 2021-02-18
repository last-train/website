require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `The Last Train Podcast`,
    description: `A conversational podcast featuring the type of conversations you would have at the end of the day, on the last train home – sincere, honest, candid.`,
    author: `DT & Tolu Akindele`,
    siteUrl: `https://thelasttrain.fm`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      plugins: [
        {
          resolve: `gatsby-remark-images-contentful`,
          options: {
            maxWidth: 900,
            linkImagesToOriginal: false,
            backgroundColor: "transparent",
            withWebp: true,
          },
        },
      ],
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `episodes`,
        remote: `https://github.com/requirepodcast/episodes.git`,
        patterns: `episodes/*.md`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Last Train Podcast`,
        short_name: `Last Train`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#feb80a`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: 'gatsby-source-anchor',
      options: {
        rss: 'https://anchor.fm/s/2dc02ccc/podcast/rss',
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
  ],
}
