import PropTypes from 'prop-types'
import React from 'react'
import Img from 'gatsby-image'

const ImageFull = ({ image }) => <Img fluid={image} className="w-full h-full" />

ImageFull.propTypes = {
	image: PropTypes.object.isRequired,
}

export default ImageFull
