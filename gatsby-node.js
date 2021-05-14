const fetch = require("node-fetch")

exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest },
  options
) => {
  try {
    const { url, token } = options

    const res = await fetch(`${url}?token=${token}`)
    const data = await res.json()
    data.data.forEach(page => {
      const node = {
        ...page,
        id: createNodeId(`BLUDIT-DATA-${page.key}`),
        internal: {
          type: "Bludit",
          contentDigest: createContentDigest(page),
        },
      }
      actions.createNode(node)
    })
  } catch (error) {
    console.log(error)
  }
}
