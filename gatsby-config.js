module.exports = {
  siteMetadata: {
    title: `Czosnek24h `,
    description: `Sprzedaż czosnku w hurtowych ilościach, dojazd do klienta, towar najwyższej jakości.`,
    author: `Czosnek24h`,
    siteUrl: 'https://czosnek24h.pl',
    menuLinks: [
      {
        name: 'Home',
        link: '/'
      },
      {
        name: 'O nas',
        link: '/about'
      },
      {
        name: 'Oferta',
        link: '/offer'
      },
      {
        name: 'Galeria',
        link: '/gallery'
      },
      {
        name: 'Kontakt',
        link: '/contact'
      },
    ],
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Czosnek24h`,
        short_name: `Czosnek24h`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `rgb(146, 49, 89)`,
        display: `minimal-ui`,
        icon: `src/images/icons/logoIco.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-background-image`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `francois one`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `dky8pootj60q`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `QOryMPDMlB1kQOkf1hSejmvhqEhTZn2db2hOzeL0Q5A`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: ``,
      },
    },
    `gatsby-plugin-sitemap`,
  ],
}
