import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash.get'

import PageHero from './PageHero'

const PageHeroContainer = ({ slice }) => {
	if (!slice.primary) {
		return null
	}

	const { primary } = slice

	const title = get(primary, 'page_hero_title', '')
	const introduction = get(primary, 'page_hero_introduction', [])
	const image = get(
		primary,
		'page_hero_imageSharp.childImageSharp.fluid',
		null,
	)

	console.log(image)

	return <PageHero title={title} introduction={introduction} image={image} />
}

PageHeroContainer.propTypes = {
	slice: PropTypes.object.isRequired,
}

export default PageHeroContainer
