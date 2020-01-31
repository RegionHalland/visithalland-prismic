import React from 'react'
import ImageFullWidth from './ImageFullWidth'

const ImageFullWidthContainer = ({ slice, meta, seo }) => {
	if (!slice.primary) {
		return null
	}

	const {
		primary: {
			image_full_width_caption: caption,
			image_full_width_imageSharp: image,
		},
	} = slice

	return (
		<ImageFullWidth
			caption={caption}
			image={image ? image.childImageSharp.fluid : null}
		/>
	)
}

export default ImageFullWidthContainer
