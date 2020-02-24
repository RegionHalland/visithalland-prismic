import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash.get'

import ArticleListSmall from './ArticleListSmall'
import ArticleListLarge from './ArticleListLarge'

const ArticleListContainer = ({ slice }) => {
	const { fields, primary } = slice

	if (!fields || !Array.isArray(fields) || !primary) {
		return null
	}

	const variant = get(primary, 'article_grid_variant', 'small').toLowerCase()

	const items = fields.map(item => ({
		title: get(item, 'article_list_relationship.title', ''),
		description: get(item, 'article_list_relationship.seo_description', {}),
		meta: get(item, 'article_list_relationship._meta', {}),
		buttonLabel: get(item, 'article_list_button_label', ''),
		image: get(
			item,
			'article_list_relationship.seo_featured_imageSharp.childImageSharp.fluid',
			null,
		),
	}))

	if (variant === 'large') {
		return <ArticleListLarge items={items} />
	}

	return <ArticleListSmall items={items} />
}

ArticleListContainer.propTypes = {
	slice: PropTypes.object.isRequired,
}

export default ArticleListContainer
