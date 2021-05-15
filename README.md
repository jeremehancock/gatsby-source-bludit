
[![GitHub license](https://img.shields.io/github/license/mhancoc7/gatsby-source-bludit?color=orange&style=for-the-badge)](https://github.com/mhancoc7/gatsby-source-bludit/blob/main/LICENSE)
[![demo](https://img.shields.io/badge/Gatsby%20%2B%20Bludit-Demo-green?style=for-the-badge)](https://dumbprojects.com/bludit/)
[![npm](https://img.shields.io/npm/v/gatsby-source-bludit?label=NPM%20PACKAGE&style=for-the-badge)](https://www.npmjs.com/package/gatsby-source-bludit)

# gatsby-source-bludit

## Description

This Gatsby Source plugin allows you to pull in data from your [Bludit](https://bludit.com) site via the [Bludit API](https://docs.bludit.com/en/api/introduction). 

### Dependencies

- node-fetch

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
