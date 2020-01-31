import PropTypes from 'prop-types'
import React from 'react'
import Img from 'gatsby-image'

const ImageFull = ({ image, caption }) => (
	<figure className="w-full h-full">
		{image && <Img fluid={image} className="w-full h-full mb-2" />}
		{caption && (
			<figcaption className="text-gray-600 font-sans italic text-sm block text-right">
				{caption}
			</figcaption>
		)}
	</figure>
)

ImageFull.propTypes = {
	image: PropTypes.object.isRequired,
	caption: PropTypes.string,
}

export default ImageFull
