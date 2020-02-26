import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { withPreview } from 'gatsby-source-prismic-graphql'

const Seo = ({ description, lang, meta, title, image }) => {
	const siteQuery = graphql`
		query {
			site {
				siteMetadata {
					title
					description
					author
					baseUrl
				}
			}
		}
	`

	return (
		<StaticQuery
			query={`${siteQuery}`}
			render={withPreview(data => {
				const defaults = data.site.siteMetadata

				if (defaults.baseUrl === '' && typeof window !== 'undefined') {
					defaults.baseUrl = window.location.origin
				}

				if (defaults.baseUrl === '' || !defaults.baseUrl) {
					console.error('Please set a baseUrl in your site metadata!')
					return null
				}

				const imageSeo = image
					? new URL(image, defaults.baseUrl)
					: false

				const metaDescription =
					description || data.site.siteMetadata.description
				return (
					<Helmet
						htmlAttributes={{
							lang,
						}}
						title={title}
						titleTemplate={`%s | ${data.site.siteMetadata.title}`}
						meta={[
							{
								name: `description`,
								content: metaDescription,
							},
							{
								name: `image`,
								content: imageSeo.href,
							},
							{
								property: `og:title`,
								content: title,
							},
							{
								property: `og:description`,
								content: metaDescription,
							},
							{
								property: `og:image`,
								content: imageSeo.href,
							},
							{
								property: `og:type`,
								content: `article`,
							},
							{
								property: `twitter:image`,
								content: imageSeo.href,
							},
							{
								name: `twitter:card`,
								content: `summary`,
							},
							{
								name: `twitter:creator`,
								content: data.site.siteMetadata.author,
							},
							{
								name: `twitter:title`,
								content: title,
							},
							{
								name: `twitter:description`,
								content: metaDescription,
							},
						].concat(meta)}
					/>
				)
			}, siteQuery)}
		/>
	)
}

Seo.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``,
}

Seo.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired,
}

export default Seo
