import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash.get'

import HeroCarousel from './HeroCarousel'

const HeroCarouselContainer = ({ slice }) => {
	const { fields } = slice

	if (!fields || !Array.isArray(fields)) {
		return null
	}

	const items = fields.map(item => ({
		buttonLabel: get(item, 'hero_carousel_button_label', ''),
		title: get(item, 'hero_carousel_relationship.title', ''),
		meta: get(item, 'hero_carousel_relationship._meta', {}),
		image: get(
			item,
			'hero_carousel_relationship.seo_featured_imageSharp.fluid',
			null,
		),
		copyright: get(
			primary,
			'hero_carousel_relationship.seo_featured_image.copyright',
			null,
		),
		alt: get(
			primary,
			'hero_carousel_relationship.seo_featured_image.alt',
			null,
		),
	}))

	return <HeroCarousel items={items} />
}

HeroCarouselContainer.propTypes = {
	slice: PropTypes.object.isRequired,
}

export default HeroCarouselContainer
