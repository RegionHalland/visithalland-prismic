import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash.get'
import ImageFullWidth from './ImageFullWidth'

const ImageFullWidthContainer = ({ slice }) => {
	if (!slice.primary) {
		return null
	}

	const { primary } = slice

	const image = {
		image: get(
			primary,
			'full_width_image_srcSharp.childImageSharp.fluid',
			{},
		),
		caption: get(primary, 'full_width_image_caption', null),
	}

	return <ImageFullWidth {...image} />
}

ImageFullWidthContainer.propTypes = {
	slice: PropTypes.object.isRequired,
}

export default ImageFullWidthContainer
