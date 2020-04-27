import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash.get'

import FeatureFull from './FeatureFull'
import FeatureSplitColor from './FeatureSplitColor'
import FeatureSplitShadow from './FeatureSplitShadow'

const FeatureContainer = ({ slice }) => {
	if (!slice.primary) {
		return null
	}
	const { primary } = slice
	const variant = get(primary, 'feature_variant', '').toLowerCase()
	const featureTitle = get(primary, 'feature_title', null)
	const title = featureTitle
		? featureTitle
		: get(primary, 'feature_link.title', '')
	const body = get(primary, 'feature_body', '')
	const buttonLabel = get(primary, 'feature_button_label', '')
	const featureImage = get(
		primary,
		'feature_imageSharp.childImageSharp.fluid',
		null,
	)
	const image = featureImage
		? featureImage
		: get(
				primary,
				'feature_link.seo_featured_imageSharp.childImageSharp.fluid',
				null,
		  )
	const copyright = featureImage
		? get(primary, 'feature_image.copyright', null)
		: get(primary, 'feature_link.seo_featured_image.copyright', null)

	const alt = get(primary, 'feature_link.seo_featured_image.alt', null)
	const meta = get(primary, 'feature_link._meta', {})
	const url = get(primary, 'feature_link.url', '')
	const tags = get(primary, 'collection_link._meta.tags', [])

	if (variant === 'split color') {
		return (
			<FeatureSplitColor
				title={title}
				body={body}
				buttonLabel={buttonLabel}
				image={image}
				copyright={copyright}
				alt={alt}
				meta={meta}
				url={url}
				tags={tags}
			/>
		)
	}

	if (variant === 'split shadow') {
		return (
			<FeatureSplitShadow
				title={title}
				body={body}
				buttonLabel={buttonLabel}
				image={image}
				copyright={copyright}
				alt={alt}
				meta={meta}
				url={url}
				tags={tags}
			/>
		)
	}

	return (
		<FeatureFull
			title={title}
			body={body}
			buttonLabel={buttonLabel}
			image={image}
			copyright={copyright}
			alt={alt}
			meta={meta}
			url={url}
			tags={tags}
		/>
	)
}

FeatureContainer.propTypes = {
	slice: PropTypes.object.isRequired,
}

export default FeatureContainer
