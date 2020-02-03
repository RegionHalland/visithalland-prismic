import propTypes from 'prop-types'
import React from 'react'
import Img from 'gatsby-image'

import Container from '../Container'

const ImageFullWidth = ({ image, caption }) => (
	<figure className="w-full h-full">
		{image && <Img fluid={image} className="w-full h-full mb-2" />}
		{caption && (
			<Container>
				<figcaption className="text-gray-600 font-sans italic text-sm block text-right">
					{caption}
				</figcaption>
			</Container>
		)}
	</figure>
)

ImageFullWidth.propTypes = {
	image: propTypes.object.isRequired,
	caption: propTypes.string,
}

export default ImageFullWidth
