import React from 'react'
import PropTypes from 'prop-types'
import Image from '../Image'
import Container from '../Container'

const ImageSmall = ({ image, caption }) => {
	return (
		<Container className="mb-8">
			<Image className="mb-2 xl:rounded" fluid={image} />
			<div className="px-4 md:px-6 xl:p-0 w-full flex justify-end">
				<span className="text-right text-sm md:text-base text-gray-600">
					{caption}
				</span>
			</div>
		</Container>
	)
}

ImageSmall.propTypes = {
	image: PropTypes.object,
	caption: PropTypes.string,
}

export default ImageSmall
