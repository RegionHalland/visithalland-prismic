import React from 'react'
import propTypes from 'prop-types'

import Image from '../Image'
import PublicationDate from '../PublicationDate'
import TextRenderer from '../TextRenderer'

const ArticleHero = ({
	title = '',
	introduction,
	author,
	publicationDate,
	image,
}) => {
	return (
		<div>
			<h1>{title}</h1>
			<TextRenderer text={introduction} />
			<PublicationDate publicationDate={publicationDate} />
			<Image {...image} className="w-full h-full" />
		</div>
	)
}

ArticleHero.propTypes = {
	title: propTypes.string,
	introduction: propTypes.arrayOf(propTypes.object),
	// author: propTypes.object.isRequired,
	publicationDate: propTypes.string.isRequired,
	image: propTypes.object,
}

export default ArticleHero
