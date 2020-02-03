import propTypes from 'prop-types'
import React from 'react'

import Container from '../Container'
import ArticleImageThumbnail from '../ArticleImageThumbnail'

const ArticleGrid = ({ articles, ...props }) => {
	return (
		<Container tight className="px-3 md:px-4">
			<div className="flex flex-wrap md:-mx-3">
				{articles.map((article, index) => {
					return (
						<div
							key={index}
							className="w-full md:w-6/12 md:px-3 mb-3 md:mb-6"
						>
							<ArticleImageThumbnail {...article} />
						</div>
					)
				})}
			</div>
		</Container>
	)
}

ArticleGrid.propTypes = {
	articles: propTypes.array.isRequired,
}

export default ArticleGrid
