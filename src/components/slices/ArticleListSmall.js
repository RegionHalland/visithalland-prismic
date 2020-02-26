import React from 'react'
import PropTypes from 'prop-types'
import Container from '../Container'
import { linkResolver } from '../../utils/linkResolver'

import ArticleListItemSmall from '../ArticleListItemSmall'

const ArticleListSmall = ({ items }) => {
	return (
		<Container tight className="px-4 md:px-6">
			{items.map(item => (
				<ArticleListItemSmall
					className="mb-6 block"
					key={item.meta.uid}
					image={item.image}
					title={item.title}
					excerpt={item.description}
					to={linkResolver(item.meta)}
				/>
			))}
		</Container>
	)
}

ArticleListSmall.propTypes = {
	items: PropTypes.array.isRequired,
}

export default ArticleListSmall
