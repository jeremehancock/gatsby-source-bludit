
[![GitHub license](https://img.shields.io/github/license/mhancoc7/gatsby-source-bludit?color=orange&style=for-the-badge)](https://github.com/mhancoc7/gatsby-source-bludit/blob/main/LICENSE)
[![demo](https://img.shields.io/badge/Gatsby%20%2B%20Bludit-Demo-green?style=for-the-badge)](https://dumbprojects.com/bludit/)
[![npm](https://img.shields.io/npm/v/gatsby-source-bludit?label=NPM%20PACKAGE&style=for-the-badge)](https://www.npmjs.com/package/gatsby-source-bludit)
[![gatsby](https://img.shields.io/static/v1?label=TRY&message=GATSBY&color=blueviolet&style=for-the-badge)](https://www.gatsbyjs.com/)
[![bludit](https://img.shields.io/static/v1?label=TRY&message=BLUDIT&color=black&style=for-the-badge)](https://www.bludit.com)

# gatsby-source-bludit

## Description

This Gatsby Source plugin allows you to pull in data from your [Bludit](https://bludit.com) site via the [Bludit API](https://docs.bludit.com/en/api/introduction). 

### Dependencies

- node-fetch

### How to install

```
npm install gatsby-source-bludit
```

Examples of what to add to your `gatsby-config.js` in the plugins array:

```
    {
      resolve: `gatsby-source-bludit`,
      options: {
        url: "https://<YOUR-BLUDIT-URL>/api/pages",
        token: process.env.GATSBY_BLUDIT_TOKEN,
        numberOfItems: "10", // Only available on the /api/pages endpoint
        rootKey: "BluditPages"
      },
    },
    {
      resolve: `gatsby-source-bludit`,
      options: {
        url: "https://<YOUR-BLUDIT-URL>/api/categories",
        token: process.env.GATSBY_BLUDIT_TOKEN,
        rootKey: "BluditCategories"
      },
    },
```

The example above shows setting two endpoints for usage.

## Options

| **Name**  | **Type**        | **Description**                                                                                                                                                                                         |
| :-------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| url             | string    | `Required` Url of your API endpoint.                                  |
| token           | string    | `Required` API Token. 
| rootKey         | string    | `Required` Name the endpoint.
| numberOfItems   | string    | `Optional` Number of items to return. Only used for the `/api/pages` endpoint. Default is set to return all.


The examples above is using an environment variable to include the Bludit Token securely. [Learn More](https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/)

### How to query for data

```
export const query = graphql`
  {
    allBluditPages {
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

Be sure to set the `allBluditPages` above to use the `rootKey` that you set for the endpoint. 

### How to contribute

Any contribution, feedback, and PRs are very welcome. Issues is the preferred method of submitting feedback.
