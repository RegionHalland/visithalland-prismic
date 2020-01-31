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
	ArticleGridFragment,
	ImageFullWidthFragment,
} from '../fragments'

const Content = ({
	data: {
		prismic: {
			allMenus: { edges },
			content,
		},
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

	const menus = edges[0] || []
	const mainMenu = menus.node ? menus.node.main_menu_links : []
	const topMenu = menus.node ? menus.node.top_menu_links : []

	return (
		<Layout mainMenu={mainMenu} topMenu={topMenu}>
			<Seo title="Page" />
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
						name
						_linkType
						main_menu_links {
							main_menu_link_label
							main_menu_link {
								... on PRISMIC_Content {
									title
									_meta {
										type
										uid
										lang
									}
								}
							}
						}
						top_menu_links {
							top_menu_link {
								... on PRISMIC_Content {
									_linkType
									title
									seo_description
									_meta {
										uid
										lang
										type
									}
								}
								... on PRISMIC__ImageLink {
									_linkType
									url
								}
								... on PRISMIC__FileLink {
									_linkType
									url
									size
									name
								}
								... on PRISMIC__ExternalLink {
									_linkType
									url
								}
							}
							top_menu_link_label
						}
					}
				}
			}
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
					...ArticleGridFragment
					...ImageFullWidthFragment
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
	ArticleGridFragment,
	ImageFullWidthFragment,
]

export default Content
