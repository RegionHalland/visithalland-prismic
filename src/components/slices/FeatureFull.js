import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { linkResolver } from '../../utils/linkResolver'
import Image from '../Image'

const FeatureFull = ({ title, image, meta, label }) => (
	<div>
		<div>{title}</div>
		<Link to={linkResolver(meta)}>{label}</Link>
		<Image {...image} className="w-full h-full" />
	</div>
)

FeatureFull.propTypes = {
	title: PropTypes.string.isRequired,
	linkType: PropTypes.string.isRequired,
	buttonLabel: PropTypes.string.isRequired,
	image: PropTypes.object,
	meta: PropTypes.object.isRequired,
	url: PropTypes.string,
}

export default FeatureFull
