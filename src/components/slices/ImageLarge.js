import React from 'react'
import PropTypes from 'prop-types'
import Image from '../Image'
import ImageCopyright from '../ImageCopyright'
import Container from '../Container'

const ImageLarge = ({ image, caption, copyright, alt }) => {
	return (
		<Container className="lg:px-6">
			<div className="relative">
				<Image
					className="mb-2 lg:rounded overflow-hidden"
					fluid={image}
					alt={alt}
				/>
				<ImageCopyright credits={copyright} />
			</div>
			<div className="px-4 md:px-6 lg:p-0 w-full">
				<span className="text-sm md:text-base text-gray-600">
					{caption}
				</span>
			</div>
		</Container>
	)
}

ImageLarge.propTypes = {
	image: PropTypes.object,
	caption: PropTypes.string,
}

export default ImageLarge
