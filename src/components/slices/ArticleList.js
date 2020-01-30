import PropTypes from 'prop-types'
import React from 'react'

import Container from '../Container'
import ArticleListItem from '../ArticleListItem'

const ArticleList = ({ articles, ...props }) => (
	<Container className="px-3 md:px-4">
		{articles.map((article, index) => {
			return (
				<ArticleListItem
					{...article}
					className="mb-6 block"
					key={index}
				/>
			)
		})}
	</Container>
)

ArticleList.propTypes = {
	articles: PropTypes.object.isRequired,
}

export default ArticleList
