import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash.get'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import ContentParser from '../components/ContentParser'
import HeaderContainer from '../components/header/HeaderContainer'
import {
	ArticleHeroFragment,
	HeroCarouselFragment,
	PageHeroFragment,
	MenusFragment,
	FeaturedArticleFragment,
	ArticleCarouselFragment,
	ImageFullWidthFragment,
	TextFragment,
	ArticleListFragment,
	ArticleGridFragment,
	InfoBoxFragment,
	EditorFragment,
} from '../fragments'

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
		title,
	} = content

	// Create an object for SEO-fields
	const seo = {
		description: seo_description,
		image: seo_image,
	}

	return (
		<Layout>
			<Seo
				description={get(seo, 'description[0].text', null)}
				image={get(seo, 'image.childImageSharp.fixed.src', null)}
				lang={meta.lang}
				title={title}
			/>
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
				seo_description
				seo_featured_image
				seo_featured_imageSharp {
					childImageSharp {
						fluid(maxWidth: 1920, quality: 100) {
							...GatsbyImageSharpFluid
						}
						fixed(width: 1200, height: 628) {
							...GatsbyImageSharpFixed
						}
					}
				}
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

Content.fragments = [
	EditorFragment,
	ArticleHeroFragment,
	HeroCarouselFragment,
	PageHeroFragment,
	MenusFragment,
	FeaturedArticleFragment,
	ArticleCarouselFragment,
	ImageFullWidthFragment,
	TextFragment,
	ArticleListFragment,
	ArticleGridFragment,
	InfoBoxFragment,
]

export default Content
