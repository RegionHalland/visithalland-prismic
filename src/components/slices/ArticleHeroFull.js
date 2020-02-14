import React from 'react'
import PropTypes from 'prop-types'

import Image from '../Image'
import PublicationDate from '../PublicationDate'
import TextRenderer from '../TextRenderer'
import Author from '../Author'

const ArticleHeroFull = ({
	title,
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
			<Author {...author} />
		</div>
	)
}

ArticleHeroFull.propTypes = {
	title: PropTypes.string,
	introduction: PropTypes.arrayOf(PropTypes.object),
	author: PropTypes.object,
	publicationDate: PropTypes.string.isRequired,
	image: PropTypes.object,
}

export default ArticleHeroFull
