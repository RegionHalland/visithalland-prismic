import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import ContentParser from '../components/ContentParser'
import HeaderContainer from '../components/header/HeaderContainer'

const Content = ({
	data: {
		prismic: { content, allMenus },
	},
}) => {
	// Return if page has no content or body (slices)
	if (!content || !content.body) {
		// TODO: Return 404?
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

	//console.log('content', content)

	return (
		<Layout>
			<Seo title="Page" />
			<HeaderContainer allMenus={allMenus} meta={meta} />
			<ContentParser slices={slices} meta={meta} seo={seo} />
		</Layout>
	)
}

export const query = graphql`
	query($uid: String!, $lang: String!) {
		prismic {
			allMenus(lang: $lang) {
				edges {
					node {
						...MenusFragment
					}
				}
			}
			content(uid: $uid, lang: $lang) {
				title
				_meta {
					firstPublicationDate
					uid
					lang
					type
					alternateLanguages {
						uid
						type
						lang
						id
					}
				}
				body {
					...ArticleHeroFragment
					...HeroCarouselFragment
					...PageHeroFragment
					...FeaturedArticleFragment
					...ArticleCarouselFragment
					...ImageFullWidthFragment
					...TextFragment
					...ArticleListFragment
					...ArticleGridFragment
					...InfoBoxFragment
				}
			}
		}
	}
`

export default Content
