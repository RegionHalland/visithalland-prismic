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
		className="h-500px md:h-900px w-full text-3xl  md:text-5xl"
		url={url}
		to={linkResolver(meta)}
		buttonLabel={buttonLabel}
		button
	/>
)

FeatureFull.propTypes = {
	title: PropTypes.string.isRequired,
	linkType: PropTypes.string.isRequired,
	buttonLabel: PropTypes.string.isRequired,
	image: PropTypes.object,
	body: PropTypes.array,
	meta: PropTypes.object.isRequired,
	url: PropTypes.string,
}

export default FeatureFull
