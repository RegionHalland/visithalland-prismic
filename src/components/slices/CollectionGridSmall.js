import React from 'react'
import PropTypes from 'prop-types'
import { linkResolver } from '../../utils/linkResolver'

import CollectionGridImageThumbnail from '../CollectionGridImageThumbnail'
import Container from '../Container'

const CollectionGridSmall = ({ items }) => (
	<Container className="px-4 md:px-6" tight>
		<div className="flex flex-wrap -mx-2">
			{items.map(({ title, tags, meta, image }, index) => (
				<div
					key={`${meta.uid}-${index}`}
					className="px-2 mb-3 w-full md:w-6/12 text-3xl"
				>
					<CollectionGridImageThumbnail
						title={title}
						image={image}
						tags={tags}
						to={linkResolver(meta)}
					/>
				</div>
			))}
		</div>
	</Container>
)

CollectionGridSmall.propTypes = {
	items: PropTypes.array.isRequired,
}

export default CollectionGridSmall
