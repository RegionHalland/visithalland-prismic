import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash.get'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import ContentParser from '../components/ContentParser'
import AnnouncementContainer from '../components/AnnouncementContainer'
import HeaderContainer from '../components/header/HeaderContainer'
import FooterContainer from '../components/FooterContainer'
import {
	HeroFragment,
	ImageFragment,
	FeatureFragment,
	CollectionFragment,
	TextFragment,
	EditorFragment,
	VideoFragment,
	QuoteFragment,
	ListFragment,
	MenuFragment,
} from '../fragments'

const Content = ({
	data: {
		prismic: { content, allAnnouncements, menu },
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
			<AnnouncementContainer announcements={allAnnouncements} />
			<HeaderContainer menu={menu} meta={meta} />
			<ContentParser slices={slices} meta={meta} seo={seo} />
			<FooterContainer meta={meta} />
		</Layout>
	)
}

export const query = graphql`
	query($uid: String!, $lang: String!) {
		prismic {
			menu(lang: $lang, uid: "navigation") {
				...MenuFragment
			}
			allAnnouncements {
				edges {
					node {
						announcement_content
						announcement_active
						_meta {
							id
						}
					}
				}
			}
			content(uid: $uid, lang: $lang) {
				title
				seo_description
				seo_featured_image
				seo_featured_imageSharp {
					childImageSharp {
						fluid(maxWidth: 1920, quality: 80) {
							...GatsbyImageSharpFluid
						}
						fixed(width: 1200, height: 628, quality: 80) {
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
					...HeroFragment
					...ImageFragment
					...FeatureFragment
					...CollectionFragment
					...TextFragment
					...VideoFragment
					...QuoteFragment
					...ListFragment
				}
			}
		}
	}
`

Content.fragments = [
	HeroFragment,
	ImageFragment,
	FeatureFragment,
	CollectionFragment,
	TextFragment,
	EditorFragment,
	VideoFragment,
	QuoteFragment,
	ListFragment,
	MenuFragment,
]

export default Content
