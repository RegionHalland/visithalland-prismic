import React from 'react'
import PropTypes from 'prop-types'
import Image from '../Image'

const ImageFullWidth = ({ image, caption }) => {
	return (
		<div>
			<Image fluid={image} />
			<span className="float-right">{caption}</span>
		</div>
	)
}

ImageFullWidth.propTypes = {
	image: PropTypes.object.isRequired,
	caption: PropTypes.string.isRequired,
}

export default ImageFullWidth
