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
	if (!content) return null

	const { body, _meta } = content

	return (
		<Layout>
			<Seo title="Page" />
			<ContentParser slices={body} prismicMeta={_meta} />
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
