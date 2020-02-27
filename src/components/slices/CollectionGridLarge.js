import React from 'react'
import PropTypes from 'prop-types'
import { linkResolver } from '../../utils/linkResolver'
import CollectionGridImageThumbnail from '../CollectionGridImageThumbnail'
import Container from '../Container'

const gridOrder = [
	'small',
	'large',
	'large',
	'small',
	'small',
	'large',
	'large',
	'small',
	'small',
	'large',
	'large',
	'small',
	'small',
	'large',
	'large',
	'small',
	'small',
	'large',
	'large',
	'small',
	'small',
]

const CollectionGridLarge = ({ items }) => (
	<Container className="px-4 md:px-6">
		<div className="flex flex-wrap -mx-2">
			{items.map(({ title, tags, meta, image }, index) => (
				<div
					key={`${meta.uid}-${index}`}
					className={`px-2 mb-3 w-full md:w-6/12 ${
						gridOrder[index] === 'large' ? 'lg:w-8/12' : 'lg:w-4/12'
					}`}
				>
					<CollectionGridImageThumbnail
						title={title}
						image={image}
						tags={tags}
						to={linkResolver(meta)}
						size={gridOrder[index] === 'large' ? 'large' : 'small'}
					/>
				</div>
			))}
		</div>
	</Container>
)

CollectionGridLarge.propTypes = {
	items: PropTypes.array.isRequired,
}

export default CollectionGridLarge
