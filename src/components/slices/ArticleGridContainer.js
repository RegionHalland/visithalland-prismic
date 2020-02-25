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

	const variant = get(primary, 'article_grid_variant', 'small')

	const items = fields.map(({ article_grid_relationship: item }) => ({
		title: get(item, 'title', ''),
		meta: get(item, '_meta', {}),
		tags: get(item, '_meta.tags', []),
		image: get(item, 'seo_featured_imageSharp.childImageSharp.fluid', null),
	}))

	if (variant && variant.toLowerCase() === 'large') {
		return <ArticleGridLarge items={items} />
	}

	return <ArticleGridSmall items={items} />
}

ArticleGridContainer.propTypes = {
	slice: PropTypes.object.isRequired,
}

export default ArticleGridContainer
