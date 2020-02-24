import React from 'react'
import PropTypes from 'prop-types'
import Image from '../Image'
import TextRenderer from '../TextRenderer'

const ArticleListLarge = ({ items }) => {
	return (
		<ul>
			{items.map(item => (
				<li key={item.meta.uid}>
					<Image fluid={item.image} />
					<span>{item.title}</span>
					<TextRenderer text={item.description} />
				</li>
			))}
		</ul>
	)
}

ArticleListLarge.propTypes = {
	items: PropTypes.array.isRequired,
}

export default ArticleListLarge
