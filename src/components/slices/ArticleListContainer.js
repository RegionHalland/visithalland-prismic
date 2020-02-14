import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash.get'
import ArticleList from './ArticleList'

const ArticleListContainer = ({ slice }) => {
	const { fields } = slice

	if (!fields || !Array.isArray(fields)) {
		return null
	}

	const items = fields.map(({ article_list_relationship: item }) => ({
		title: get(item, 'title', ''),
		description: get(item, 'seo_description', {}),
		meta: get(item, '_meta', {}),
		image: get(item, 'seo_featured_imageSharp.childImageSharp.fluid', null),
	}))

	return <ArticleList items={items} />
}

ArticleListContainer.propTypes = {
	slice: PropTypes.object.isRequired,
}

export default ArticleListContainer
