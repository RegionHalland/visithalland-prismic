import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import ContentParser from '../components/ContentParser'

import {
	TextFragment,
	ArticleHeroFullFragment,
	ArticleHeroSplitFragment,
	ArticleListFragment,
} from '../fragments'

const Content = ({
	data: {
		prismic: { content },
	},
}) => {
	// Return if page has no content
	// TODO: Return 404?
	if (!content) {
		return null
	}

	// Get slices, meta and SEO-fields
	// meta contains information like uid, publicationDate etc
	const {
		body: slices,
		_meta: meta,
		seo_description,
		seo_featured_imageSharp: seo_image,
	} = content

	// Create an object for SEO-fields
	const seo = {
		description: seo_description,
		image: seo_image,
	}

	return (
		<Layout>
			<Seo title="Page" />
			<ContentParser slices={slices} meta={meta} seo={seo} />
		</Layout>
	)
}

export const query = graphql`
	query($uid: String!, $lang: String!) {
		prismic {
			content(uid: $uid, lang: $lang) {
				title
				_meta {
					firstPublicationDate
				}
				seo_description
				seo_featured_image
				seo_featured_imageSharp {
					childImageSharp {
						fluid(maxWidth: 1900) {
							...GatsbyImageSharpFluid
						}
					}
				}
				body {
					...TextFragment
					...ArticleHeroFullFragment
					...ArticleHeroSplitFragment
					...ArticleListFragment
				}
			}
		}
	}
`

Content.fragments = [
	TextFragment,
	ArticleHeroFullFragment,
	ArticleHeroSplitFragment,
	ArticleListFragment,
]

export default Content
