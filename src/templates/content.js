import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import SliceParser from '../components/SliceParser'

import { TextFragment } from '../fragments'

const Content = ({
	data: {
		prismic: { content },
	},
}) => {
	if (!content) return null

	return (
		<Layout>
			<Seo title="Page" />
			<h1>Hello from Page</h1>
			<SliceParser slices={content.body} />
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
				}
			}
		}
	}
`

Content.fragments = [TextFragment]

export default Content
