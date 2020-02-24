import React from 'react'
import PropTypes from 'prop-types'
import Image from '../Image'
import Container from '../Container'

const ImageFullWidth = ({ image, caption }) => {
	return (
		<Container className="mb-8">
			<Image className="mb-2" fluid={image} />
			<div className="px-4 md:px-6 w-full flex justify-end">
				<span className="text-right text-sm md:text-base text-gray-600">
					{caption}
				</span>
			</div>
		</Container>
	)
}

ImageFullWidth.propTypes = {
	image: PropTypes.object,
	caption: PropTypes.string,
}

export default ImageFullWidth
