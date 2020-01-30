import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import SliceParser from '../components/SliceParser'

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

	const { body, _meta: meta } = content

	return (
		<Layout>
			<Seo title="Page" />
			<SliceParser slices={body} meta={meta} />
		</Layout>
	)
}

export const query = graphql`
	query($uid: String!, $lang: String!) {
		prismic {
			content(uid: $uid, lang: $lang) {
				title
				body {
					...TextFragment
					...ArticleHeroFullFragment
					...ArticleHeroSplitFragment
				}
				_meta {
					firstPublicationDate
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
