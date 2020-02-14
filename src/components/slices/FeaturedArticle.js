import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { linkResolver } from '../../utils/linkResolver'
import Image from '../Image'

const FeaturedArticle = ({ title, image, meta, label }) => (
	<div>
		<div>{title}</div>
		<Link to={linkResolver(meta)}>{label}</Link>
		<Image {...image} className="w-full h-full" />
	</div>
)

FeaturedArticle.propTypes = {
	title: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	meta: PropTypes.object.isRequired,
	image: PropTypes.object,
}

export default FeaturedArticle
