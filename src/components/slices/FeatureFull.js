import React from 'react'
import PropTypes from 'prop-types'
import { linkResolver } from '../../utils/linkResolver'
import ArticleCard from '../ArticleCard'

const FeatureFull = ({
	title,
	body,
	image,
	copyright,
	meta,
	tags,
	alt,
	buttonLabel,
	url,
}) => (
	<ArticleCard
		title={title}
		image={image}
		tags={tags}
		excerpt={body}
		copyright={copyright}
		alt={alt}
		className="h-600px md:h-900px w-full text-4xl  md:text-6xl"
		url={url}
		to={linkResolver(meta)}
		buttonLabel={buttonLabel}
		button
	/>
)

FeatureFull.propTypes = {
	title: PropTypes.string.isRequired,
	buttonLabel: PropTypes.string,
	image: PropTypes.object,
	body: PropTypes.array,
	meta: PropTypes.object.isRequired,
	url: PropTypes.string,
}

export default FeatureFull
