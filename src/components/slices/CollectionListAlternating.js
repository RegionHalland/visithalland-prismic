import React from 'react'
import PropTypes from 'prop-types'
import Container from '../Container'
import { linkResolver } from '../../utils/linkResolver'

import ArticleListItem from '../ArticleListItem'

const CollectionListAlternating = ({ items }) => {
	return (
		<Container tight>
			{items.map((item, index) => (
				<ArticleListItem
					className="block"
					key={`${index}-${item.meta.uid}`}
					image={item.image}
					copyright={item.copyright}
					title={item.title}
					excerpt={item.description}
					url={item.url}
					meta={item.meta}
					to={linkResolver(item.meta)}
					alternate={index % 2 === 0}
					size="square"
				/>
			))}
		</Container>
	)
}

CollectionListAlternating.propTypes = {
	items: PropTypes.array.isRequired,
}

export default CollectionListAlternating
