module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Krishna Ashok",
  },
  plugins: [`gatsby-plugin-sass`,
    {
      resolve:'gatsby-plugin-react-svg',
      options: {
        rule:{
          include:/svg/
        }
      }
    }
  ],
};
