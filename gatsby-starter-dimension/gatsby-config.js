module.exports = {
  siteMetadata: {
    title: "Drushti Sheth - Physiotherpist, Vadodara",
    author: "Drushti Sheth",
    description: "Physical Therapist (PT) offering exceptional patient-service skills and a demonstrated history of clinical excellence. Credentials include Kinesio taping (Module-Basic) and Neurodevelopmental Therapy certifications; and a post gradudate degree in Musculoskeletal disorders and sports science from Sardar Patel University. Experience working with pediatric, adolescent, adult and geriatric patients. Registered with The Indian Association Physiotherapists. Drushti Sheth is based in Vadodara, Gujarat, India."
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'drushtiphysio.in',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#000000',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
