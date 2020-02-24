import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash.get'

import ArticleGridLarge from './ArticleGridLarge'
import ArticleGridSmall from './ArticleGridSmall'

const ArticleGridContainer = ({ slice }) => {
	const { fields, primary } = slice

	if (!fields || !Array.isArray(fields) || !primary) {
		return null
	}

	const variant = get(primary, 'article_grid_variant', 'small').toLowerCase()

	const items = fields.map(item => ({
		title: get(item, 'article_grid_relationship.title', ''),
		meta: get(item, 'article_grid_relationship._meta', {}),
		tags: get(item, 'article_grid_relationship._meta.tags', []),
		image: get(
			item,
			'article_grid_relationship.seo_featured_imageSharp.fluid',
			null,
		),
	}))

	if (variant === 'large') {
		return <ArticleGridLarge items={items} />
	}

	return <ArticleGridSmall items={items} />
}

ArticleGridContainer.propTypes = {
	slice: PropTypes.object.isRequired,
}

export default ArticleGridContainer
