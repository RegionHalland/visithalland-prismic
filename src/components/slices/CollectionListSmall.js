import React from 'react'
import PropTypes from 'prop-types'
import Container from '../Container'
import { linkResolver } from '../../utils/linkResolver'

import ArticleListItem from '../ArticleListItem'

const CollectionListSmall = ({ items }) => {
	return (
		<Container tight className="px-4 md:px-6">
			{items.map((item, index) => (
				<ArticleListItem
					className="mb-6 block"
					key={`${index}-${item.meta.uid}`}
					image={item.image}
					title={item.title}
					excerpt={item.description}
					url={item.url}
					meta={item.meta}
					to={linkResolver(item.meta)}
				/>
			))}
		</Container>
	)
}

CollectionListSmall.propTypes = {
	items: PropTypes.array.isRequired,
}

export default CollectionListSmall
