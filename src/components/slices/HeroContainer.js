import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash.get'

import HeroFullWidth from './HeroFullWidth'
import HeroFullWidthImageOverlay from './HeroFullWidthImageOverlay'
import HeroSplit from './HeroSplit'
import HeroFullScreen from './HeroFullScreen'

const HeroContainer = ({ slice, meta }) => {
	if (!slice.primary) {
		return null
	}

	const { firstPublicationDate } = meta
	const { primary } = slice

	console.log(primary)

	const title = get(primary, 'hero_title[0].text', '')
	const introduction = get(primary, 'hero_introduction', [])
	const video = get(primary, 'hero_video', [])
	const variant = get(primary, 'hero_variant', 'full width').toLowerCase()
	const image = get(primary, 'hero_imageSharp.childImageSharp.fluid', null)
	const imageOverlay = get(
		primary,
		'hero_overlay_imageSharp.childImageSharp.fluid',
		null,
	)
	const alt = get(primary, 'hero_image.alt', null)
	const copyright = get(primary, 'hero_image.copyright', null)

	const author = {
		name: get(primary, 'hero_author.editor_name', ''),
		email: get(primary, 'hero_author.editor_email', ''),
		phone: get(primary, 'hero_author.editor_phone', ''),
		role: get(primary, 'hero_author.editor_role', ''),
		image: get(
			primary,
			'hero_author.editor_imageSharp.childImageSharp.fluid',
			null,
		),
	}

	// Variant "Split" is selected
	if (variant === 'split') {
		return (
			<div className="mb-8">
				<HeroSplit
					title={title}
					introduction={introduction}
					publicationDate={firstPublicationDate}
					author={author}
					image={image}
					alt={alt}
					copyright={copyright}
					video={video}
				/>
			</div>
		)
	}
	if (variant === 'full screen') {
		return (
			<div className="mb-8">
				<HeroFullScreen
					title={title}
					introduction={introduction}
					publicationDate={firstPublicationDate}
					author={author}
					image={image}
					alt={alt}
					copyright={copyright}
					video={video}
				/>
			</div>
		)
	}
	if (variant === 'full width image overlay') {
		return (
			<div className="mb-8">
				<HeroFullWidthImageOverlay
					title={title}
					introduction={introduction}
					publicationDate={firstPublicationDate}
					author={author}
					image={image}
					imageOverlay={imageOverlay}
					alt={alt}
					copyright={copyright}
					video={video}
				/>
			</div>
		)
	}
	// Variant "Full" (or a variant that does not exist) is selected
	return (
		<div className="mb-8">
			<HeroFullWidth
				title={title}
				introduction={introduction}
				publicationDate={firstPublicationDate}
				author={author}
				image={image}
				alt={alt}
				copyright={copyright}
				video={video}
			/>
		</div>
	)
}

HeroContainer.propTypes = {
	slice: PropTypes.object.isRequired,
	meta: PropTypes.object.isRequired,
}

export default HeroContainer
