import React from 'react'
import PropTypes from 'prop-types'

import Image from '../Image'
import TextRenderer from '../TextRenderer'

const PageHero = ({ title, introduction, image }) => {
	return (
		<div className="bg-red-500">
			<h1>{title}</h1>
			<TextRenderer text={introduction} />
			<Image fluid={image} className="w-full h-full" />
		</div>
	)
}

PageHero.propTypes = {
	title: PropTypes.string,
	introduction: PropTypes.arrayOf(PropTypes.object),
	image: PropTypes.object,
}

export default PageHero
