const fetch = require("node-fetch")

exports.sourceNodes = async (
    { actions, createNodeId, createContentDigest, reporter },
    options
) => {
  try {
    const { url, token, numberOfItems, rootKey } = options

    const res = await fetch(`${url}?token=${token}&numberOfItems=${numberOfItems || "-1"}`)
    const data = await res.json()
    data.data.forEach(page => {
      const node = {
        ...page,
        id: createNodeId(`${rootKey.toUpperCase()}-DATA-${page.key}`),
        internal: {
          type: rootKey,
          contentDigest: createContentDigest(page),
        },
      }
      actions.createNode(node)
    })
  } catch (error) {
    reporter.panic(error.message);
  }
}