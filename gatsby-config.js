module.exports = {
	siteMetadata: {
		title: 'Visit Halland',
		description:
			'En reseguide som hjälper dig att hitta till det bästa i Halland. Visithalland.com utvecklas och drivs av Region Halland.',
		author: '@gatsbyjs',
		siteUrl:
			process.env.NODE_ENV === 'development'
				? 'http://localhost:8000'
				: 'https://beta.visithalland.com', // no trailing slash!
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`,
			},
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'gatsby-starter-default',
				short_name: 'starter',
				start_url: '/',
				background_color: '#663399',
				theme_color: '#663399',
				display: 'minimal-ui',
				icon: 'src/images/favicon.png', // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-plugin-styled-components`,
			options: {
				// Add any options here
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-153561521-2',
			},
		},
		'gatsby-plugin-postcss',
		{
			resolve: '@digitaliseringsbyran/gatsby-source-prismic-graphql',
			options: {
				repositoryName: 'visithalland', // required
				defaultLang: 'sv-se',
				langs: require('./src/utils/langs.js'),
				shortenUrlLangs: true,
				previews: true,
				pages: [
					{
						type: 'Content',
						match: '/:lang?/',
						path: '/content',
						component: require.resolve(
							'./src/templates/content.js',
						),
						filter: ({ node }) => node._meta.uid === 'frontpage',
					},
					{
						type: 'Content',
						match: '/:lang?/:uid',
						path: '/content',
						component: require.resolve(
							'./src/templates/content.js',
						),
						filter: ({ node }) => node._meta.uid !== 'frontpage',
					},
				],
			},
		},
		'gatsby-plugin-sitemap',
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// 'gatsby-plugin-offline',
	],
}
