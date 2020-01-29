import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import SliceParser from '../components/SliceParser'

// import { TestFragment } from '../fragments'

const Page = ({
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
					... on PRISMIC_ContentBodyTest {
						type
						label
						primary {
							test_title
						}
					}
				}
			}
		}
	}
`

// Page.fragments = [TestFragment]

export default Page
