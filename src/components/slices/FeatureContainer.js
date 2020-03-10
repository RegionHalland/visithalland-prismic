import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash.get'

import FeatureFull from './FeatureFull'
import FeatureOverlay from './FeatureOverlay'

const FeatureContainer = ({ slice }) => {
	if (!slice.primary) {
		return null
	}

	const { primary } = slice

	const variant = get(primary, 'feature_variant', 'small').toLowerCase()
	const linkType = get(primary, 'feature_link._linkType', '')
	const featureTitle = get(primary, 'feature_title', null)
	const title = featureTitle
		? featureTitle
		: get(primary, 'feature_link.title', '')
	const buttonLabel = get(primary, 'feature_button_label', '')
	const featureImage = get(
		primary,
		'feature_imageSharp.childImageSharp.fluid',
		null,
	)
	const image = featureImage
		? featureImage
		: get(primary, 'feature_imageSharp.childImageSharp.fluid', null)
	const meta = get(primary, 'feature_link._meta', {})
	const url = get(primary, 'feature_link.url', '')

	if (variant === 'overlay') {
		return (
			<FeatureOverlay
				title={title}
				linkType={linkType}
				buttonLabel={buttonLabel}
				image={image}
				meta={meta}
				url={url}
			/>
		)
	}

	return (
		<FeatureFull
			title={title}
			linkType={linkType}
			buttonLabel={buttonLabel}
			image={image}
			meta={meta}
			url={url}
		/>
	)
}

FeatureContainer.propTypes = {
	slice: PropTypes.object.isRequired,
}

export default FeatureContainer
