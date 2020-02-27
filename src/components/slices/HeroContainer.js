import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash.get'

import HeroFullWidth from './HeroFullWidth'
import HeroSplit from './HeroSplit'
import HeroFullScreen from './HeroFullScreen'

const HeroContainer = ({ slice, meta }) => {
	if (!slice.primary) {
		return null
	}

	const { firstPublicationDate } = meta
	const { primary } = slice

	const title = get(primary, 'hero_title[0].text', '')
	const introduction = get(primary, 'hero_introduction', [])
	const variant = get(primary, 'hero_variant', 'full').toLowerCase()
	// Get fixed or fluid image based on variant
	const image = get(
		primary,
		`hero_imageSharp.childImageSharp.${
			variant === 'full' ? 'fluid' : 'fixed'
		}`,
		null,
	)

	const author = {
		name: get(primary, 'hero_author.editor_name', ''),
		email: get(primary, 'hero_author.editor_email', ''),
		phone: get(primary, 'hero_author.editor_phone', ''),
		role: get(primary, 'hero_author.editor_role', ''),
		image: get(
			primary,
			'hero_author.editor_imageSharp.childImageSharp.fixed',
			null,
		),
	}

	// Variant "Split" is selected
	if (variant === 'split') {
		return (
			<HeroSplit
				title={title}
				introduction={introduction}
				publicationDate={firstPublicationDate}
				author={author}
				image={image}
			/>
		)
	}
	if (variant === 'full screen') {
		return (
			<HeroFullScreen
				title={title}
				introduction={introduction}
				publicationDate={firstPublicationDate}
				author={author}
				image={image}
			/>
		)
	}
	// Variant "Full" (or a variant that does not exist) is selected
	return (
		<HeroFullWidth
			title={title}
			introduction={introduction}
			publicationDate={firstPublicationDate}
			author={author}
			image={image}
		/>
	)
}

HeroContainer.propTypes = {
	slice: PropTypes.object.isRequired,
	meta: PropTypes.object.isRequired,
}

export default HeroContainer
