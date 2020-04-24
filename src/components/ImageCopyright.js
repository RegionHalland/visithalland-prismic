import React from 'react'
import propTypes from 'prop-types'

const ImageCopyright = ({ credits }) => {
	if (!credits) return null

	return (
		<div className="absolute z-40 bottom-0 right-0 mb-4 mr-4 leading-none text-white text-xs">
			© {credits}
		</div>
	)
}

ImageCopyright.propTypes = {
	credits: propTypes.string,
}

export default ImageCopyright
