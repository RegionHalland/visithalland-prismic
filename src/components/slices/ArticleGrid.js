import PropTypes from 'prop-types'
import React from 'react'

import Container from '../Container'
import ArticleImageThumbnail from '../ArticleImageThumbnail'

const ArticleGrid = ({ articles, ...props }) => {
	return (
		<Container className="px-3 md:px-4">
			<div className="flex flex-wrap">
				{articles.map((article, index) => {
					return (
						<div
							key={index}
							className="w-full md:w-6/12 px-3 mb-3 md:mb-6"
						>
							<ArticleImageThumbnail {...article} to={'/'} />
						</div>
					)
				})}
			</div>
		</Container>
	)
}

ArticleGrid.propTypes = {
	articles: PropTypes.array.isRequired,
}

export default ArticleGrid
