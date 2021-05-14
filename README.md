## Description

This Gatsby Source plugin allows you to pull in data from your [Bludit](https://bludit.com) site via the [Bludit API](https://docs.bludit.com/en/api/introduction). 

### Dependencies

- node-fetch
- query-string

### How to install

```
npm install gatsby-source-bludit
```

Add the following to your `gatsby-config.js` in the plugins array

```
    {
      resolve: `gatsby-source-bludit`,
      options: {
        url: "https://<YOUR-BLUDIT-URL>/api/pages",
        token: process.env.GATSBY_BLUDIT_TOKEN,
      },
    },
```

The example above is using an environment variable to include the Bludit Token securily. [Learn More](https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/)

### How to query for data (source plugins only)

```
export const query = graphql`
  {
    allBludit(limit: 9) {
      edges {
        node {
          id
          coverImage
          title
          permalink
          slug
        }
      }
    }
  }
`;
```

### How to contribute

Any contribution, feedback, and PRs are very welcome. Issues is the preferred method of submitting feedback.
