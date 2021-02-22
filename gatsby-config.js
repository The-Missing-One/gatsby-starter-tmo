module.exports = {
  siteMetadata: {
    title: 'TBD',
    titleTemplate: '%s | TBD',
    siteUrl: 'http://localhost:8000',
    description: 'TBD',
    image: 'TBD',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-remove-trailing-slashes',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-XXXXXX',
        includeInDevelopment: false,
      },
    },
  ],
};
