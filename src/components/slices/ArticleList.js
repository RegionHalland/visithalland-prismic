import PropTypes from 'prop-types'
import React from 'react'

import ArticleListItem from '../ArticleListItem'

const ArticleList = ({ articles, ...props }) => (
	<div className="container px-3 md:px-4">
		{articles.map((article, index) => {
			return (
				<ArticleListItem
					{...article}
					className="mb-6 block"
					key={index}
				/>
			)
		})}
	</div>
)

ArticleList.propTypes = {
	articles: PropTypes.object.isRequired,
}

export default ArticleList
