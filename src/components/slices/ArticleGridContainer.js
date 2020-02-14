import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash.get'

import ArticleGrid from './ArticleGrid'

const ArticleGridContainer = ({ slice }) => {
	const { fields } = slice

	if (!fields || !Array.isArray(fields)) {
		return null
	}

	const items = fields.map(({ article_grid_relationship: item }) => ({
		title: get(item, 'title', ''),
		meta: get(item, '_meta', {}),
		tags: get(item, '_meta.tags', []),
		image: get(item, 'seo_featured_imageSharp.fluid', null),
	}))

	return <ArticleGrid items={items} />
}

ArticleGridContainer.propTypes = {
	slice: PropTypes.object.isRequired,
}

export default ArticleGridContainer
