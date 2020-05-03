module.exports = {
  siteMetadata: {
    title: 'Anson Lichtfuss',
    author: 'Anson Lichtfuss',
    description: 'designer + developer',
    siteUrl: 'https://lichtf.us/',
    social: {
      twitter: 'ansonlichtfuss',
    },
  },
  plugins: [
    'gatsby-plugin-preact',
    'gatsby-plugin-postcss',
    'gatsby-plugin-styled-jsx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-feed',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Anson Lichtfuss',
        short_name: 'ansonlichtfuss',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#888888',
        display: 'minimal-ui',
        icon: 'content/assets/site-icon.png',
      },
    },
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-remove-trailing-slashes`,
    'gatsby-plugin-typescript',
    'gatsby-plugin-tslint',
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false, // Print removed selectors and processed file names
        develop: true, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
    `gatsby-plugin-remove-serviceworker`,
    // {
    //   resolve: 'gatsby-plugin-webpack-bundle-analyzer',
    //   options: {
    //     disable: false,
    //     analyzerPort: 3000,
    //     production: false,
    //   },
    // },
  ],
};
