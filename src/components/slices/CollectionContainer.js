import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash.get'

import CollectionListSmall from './CollectionListSmall'
import CollectionListLarge from './CollectionListLarge'
import CollectionGridSmall from './CollectionGridSmall'
import CollectionGridLarge from './CollectionGridLarge'
import CollectionCarouselSmall from './CollectionCarouselSmall'
import CollectionCarouselLarge from './CollectionCarouselLarge'
import CollectionListAlternating from './CollectionListAlternating'

const CollectionContainer = ({ slice }) => {
	const { fields, primary } = slice

	if (!fields || !Array.isArray(fields) || !primary) {
		return null
	}

	const variant = get(
		primary,
		'collection_variant',
		'small list',
	).toLowerCase()

	const items = fields.map(item => {
		const collectionTitle = get(item, 'collection_title', null)
		const title = collectionTitle
			? collectionTitle
			: get(item, 'collection_link.title', '')
		const collectionDescription = get(item, 'collection_description', null)
		const description = collectionDescription
			? collectionDescription
			: get(item, 'collection_link.seo_description', '')
		const collectionImage = get(
			item,
			'collection_imageSharp.childImageSharp.fluid',
			null,
		)
		const image = collectionImage
			? collectionImage
			: get(
					item,
					'collection_link.seo_featured_imageSharp.childImageSharp.fluid',
					null,
			  )
		const copyright = collectionImage
			? get(item, 'collection_image.copyright', null)
			: get(item, 'collection_link.seo_featured_image.copyright', null)
		const alt = collectionImage
			? get(item, 'collection_image.alt', null)
			: get(item, 'collection_link.seo_featured_image.alt', null)

		const meta = get(item, 'collection_link._meta', {})
		const url = get(item, 'collection_link.url', '')
		const tags = get(item, 'collection_link._meta.tags', [])

		return {
			title,
			description,
			image,
			copyright,
			alt,
			meta,
			url,
			tags,
		}
	})

	if (variant === 'large list') {
		return (
			<div className="py-8">
				<CollectionListLarge items={items} />
			</div>
		)
	}

	if (variant === 'alternating list') {
		return (
			<div className="py-8">
				<CollectionListAlternating items={items} />
			</div>
		)
	}

	if (variant === 'small grid') {
		return (
			<div className="py-8">
				<CollectionGridSmall items={items} />
			</div>
		)
	}

	if (variant === 'large grid') {
		return (
			<div className="py-8">
				<CollectionGridLarge items={items} />
			</div>
		)
	}

	if (variant === 'small carousel') {
		return (
			<div className="py-8">
				<CollectionCarouselSmall items={items} />
			</div>
		)
	}

	if (variant === 'large carousel') {
		return <CollectionCarouselLarge items={items} />
	}

	return (
		<div className="py-8">
			<CollectionListSmall items={items} />
		</div>
	)
}

CollectionContainer.propTypes = {
	slice: PropTypes.object.isRequired,
}

export default CollectionContainer
