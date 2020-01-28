import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import SliceParser from '../components/SliceParser'

import { AuthorFragment } from '../fragments'

const Page = ({
	data: {
		prismic: {
			content: { body: slices },
		},
	},
}) => {
	return (
		<Layout>
			<Seo title="Page" />
			<h1>Hello from Page</h1>
			<SliceParser slices={slices} />
		</Layout>
	)
}

export const query = graphql`
	query($uid: String!, $lang: String!) {
		prismic {
			content(uid: $uid, lang: $lang) {
				title
				body {
					...AuthorFragment
				}
			}
		}
	}
`

Page.fragments = [AuthorFragment]

export default Page
