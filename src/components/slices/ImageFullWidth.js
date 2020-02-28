import React from 'react'
import PropTypes from 'prop-types'
import Image from '../Image'
import Container from '../Container'

const ImageFullWidth = ({ image, caption }) => {
	return (
		<div>
			<Image className="mb-2" fluid={image} />
			<Container>
				<div className="px-4 md:px-6 xl:p-0 w-full">
					<span className="text-sm md:text-base text-gray-600">
						{caption}
					</span>
				</div>
			</Container>
		</div>
	)
}

ImageFullWidth.propTypes = {
	image: PropTypes.object,
	caption: PropTypes.string,
}

export default ImageFullWidth
