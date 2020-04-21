import React from 'react'
import PropTypes from 'prop-types'
import Image from '../Image'
import ImageCopyright from '../ImageCopyright'
import Container from '../Container'

const ImageFullWidth = ({ image, caption, alt, copyright }) => {
	return (
		<div>
			<div className="relative">
				<Image className="mb-2" fluid={image} alt={alt} />
				<ImageCopyright credits={copyright} />
			</div>
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
