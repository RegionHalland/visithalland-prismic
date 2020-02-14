import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash.get'

import FeaturedArticle from './FeaturedArticle'

const ArticleCarouselContainer = ({ slice }) => {
	if (!slice.fields) {
		return null
	}

	console.log(slice.fields)

	// const { primary } = slice

	// const title = get(primary, 'featured_article_relationship.title', '')
	// const label = get(primary, 'featured_article_button_label', 'Läs mer')
	// const meta = get(primary, 'featured_article_relationship._meta', {})
	// const image = get(
	// 	primary,
	// 	'featured_article_relationship.seo_featured_imageSharp.childImageSharp.fluid',
	// 	null,
	// )

	return <div></div>
}

ArticleCarouselContainer.propTypes = {
	slice: PropTypes.object.isRequired,
}

export default ArticleCarouselContainer
