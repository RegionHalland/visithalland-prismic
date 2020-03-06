import './src/styles/index.css'

const {
	registerLinkResolver,
} = require('@digitaliseringsbyran/gatsby-source-prismic-graphql')
const { linkResolver } = require('./src/utils/linkResolver')

registerLinkResolver(linkResolver)
