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
	const alt = get(primary, 'image_image.alt', null)
	const copyright = get(primary, 'image_image.copyright', null)

	if (variant === 'large') {
		return (
			<div className="py-4">
				<ImageLarge
					caption={caption}
					image={image}
					alt={alt}
					copyright={copyright}
				/>
			</div>
		)
	}

	if (variant === 'full width') {
		return (
			<div class="py-6">
				<ImageFullWidth
					caption={caption}
					image={image}
					alt={alt}
					copyright={copyright}
				/>
			</div>
		)
	}

	return (
		<div class="py-4">
			<ImageSmall
				caption={caption}
				image={image}
				alt={alt}
				copyright={copyright}
			/>
		</div>
	)
}

ImageContainer.propTypes = {
	slice: PropTypes.object.isRequired,
}

export default ImageContainer
