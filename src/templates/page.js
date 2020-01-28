import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import SliceParser from '../components/SliceParser'

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
					... on PRISMIC_ContentBodyAuthor {
						type
						label
						primary {
							author_relation {
								... on PRISMIC_Editor {
									author_name
									author_phone
									author_role
									author_email
								}
							}
						}
					}
					... on PRISMIC_ContentBodyHero_image_with_text {
						type
						label
						primary {
							hero_image_with_text_title
							hero_image_with_text_imgSharp {
								childImageSharp {
									fluid(maxWidth: 400, maxHeight: 250) {
										...GatsbyImageSharpFluid
									}
								}
							}
							hero_image_with_text_img
						}
					}
				}
			}
		}
	}
`

export default Page
