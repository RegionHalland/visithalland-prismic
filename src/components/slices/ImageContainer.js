import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash.get'
import ImageFullWidth from './ImageFullWidth'
import ImageSmall from './ImageSmall'
import ImageLarge from './ImageLarge'

const ImageContainer = ({ slice }) => {
	if (!slice.primary) {
		return null
	}

	const { primary } = slice

	const variant = get(primary, 'image_variant', 'small').toLowerCase()
	const caption = get(primary, 'image_caption', null)
	const image = get(primary, 'image_imageSharp.childImageSharp.fluid', null)

	if (variant === 'large') {
		return <ImageLarge caption={caption} image={image} />
	}

	if (variant === 'full width') {
		return <ImageFullWidth caption={caption} image={image} />
	}

	return <ImageSmall caption={caption} image={image} />
}

ImageContainer.propTypes = {
	slice: PropTypes.object.isRequired,
}

export default ImageContainer
