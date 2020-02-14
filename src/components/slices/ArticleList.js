import React from 'react'
import PropTypes from 'prop-types'
import Image from '../Image'

const ArticleList = ({ items }) => {
	return (
		<ul>
			{items.map(item => (
				<li key={item.meta.uid}>
					<Image fluid={item.image} />
					<span>{item.title}</span>
					<p>{item.description}</p>
				</li>
			))}
		</ul>
	)
}

ArticleList.propTypes = {
	items: PropTypes.array.isRequired,
}

export default ArticleList
