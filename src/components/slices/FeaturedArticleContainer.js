import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash.get'

import FeaturedArticle from './FeaturedArticle'

const FeaturedArticleContainer = ({ slice }) => {
	if (!slice.primary) {
		return null
	}

	const { primary } = slice

	const title = get(primary, 'featured_article_relationship.title', '')
	const label = get(primary, 'featured_article_button_label', 'Läs mer')
	const meta = get(primary, 'featured_article_relationship._meta', {})
	const image = get(
		primary,
		'featured_article_relationship.seo_featured_imageSharp.childImageSharp.fluid',
		null,
	)

	return (
		<FeaturedArticle
			title={title}
			label={label}
			meta={meta}
			image={image}
		/>
	)
}

FeaturedArticleContainer.propTypes = {
	slice: PropTypes.object.isRequired,
}

export default FeaturedArticleContainer
