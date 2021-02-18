const fs = require("fs")

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query EpisodesQuery {
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

  const allEpisodes = data.allAnchorEpisode.nodes

  for (let episode of allEpisodes) {
    const path = `/archive/${episode.id}`
    const id = episode.id

    actions.createPage({
      path,
      component: require.resolve("./src/templates/archive.js"),
      context: { id },
    })
  }

  actions.createPage({
    path: "/archive",
    component: require.resolve("./src/templates/archive.js"),
    context: { id: allEpisodes[allEpisodes.length - 1].id },
  })

  fs.writeFileSync(
    "./public/episodes.json",
    JSON.stringify(
      {
        episodes: allEpisodes.map((episode) => ({
          id: episode.id,
          description: episode.content,
          ...episode,
        })),
      },
      null,
      2
    )
  )
}
