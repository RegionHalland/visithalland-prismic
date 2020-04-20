import React from 'react'
import PropTypes from 'prop-types'
import Container from '../Container'
import { linkResolver } from '../../utils/linkResolver'

import CollectionListItemLarge from '../CollectionListItemLarge'

const CollectionListLarge = ({ items }) => {
	return (
		<Container tight className="md:px-6">
			{items.map((item, index) => (
				<CollectionListItemLarge
					className="mb-16 md:mb-8 block"
					key={`${index}-${item.meta.uid}`}
					image={item.image}
					copyright={item.copyright}
					alt={item.alt}
					title={item.title}
					excerpt={item.description}
					url={item.url}
					to={linkResolver(item.meta)}
				/>
			))}
		</Container>
	)
}

CollectionListLarge.propTypes = {
	items: PropTypes.array.isRequired,
}

export default CollectionListLarge
