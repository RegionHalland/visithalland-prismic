import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import ContentParser from '../components/ContentParser'

import {
	TextFragment,
	ArticleHeroFullFragment,
	ArticleHeroSplitFragment,
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
		seo_imageSharp: seo_image,
	} = content

	// Create an object for SEO-fields
	const seo = {
		description: seo_description,
		image: seo_image,
	}

	return (
		<Layout>
			<Seo title="Page" />
			<ContentParser slices={body} meta={meta} seo={seo} />
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
				meta_description
				meta_image
				meta_imageSharp
				body {
					...TextFragment
					...ArticleHeroFullFragment
					...ArticleHeroSplitFragment
					... on PRISMIC_ContentBodyArticle_list {
						type
						label
						fields {
							article_list_articles {
								... on PRISMIC_Content {
									title
									body {
										...ArticleHeroFullFragment
										...ArticleHeroSplitFragment
										...TextFragment
									}
								}
							}
						}
					}
				}
			}
		}
	}
`

Content.fragments = [
	TextFragment,
	ArticleHeroFullFragment,
	ArticleHeroSplitFragment,
]

export default Content
