import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { linkResolver } from '../../utils/linkResolver'
import Image from '../Image'

const FeatureOverlay = ({ title, image, meta, label }) => (
	<div>
		<div>{title}</div>
		<Link to={linkResolver(meta)}>{label}</Link>
		<Image {...image} className="w-full h-full" />
	</div>
)

FeatureOverlay.propTypes = {
	title: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	meta: PropTypes.object.isRequired,
	image: PropTypes.object,
}

export default FeatureOverlay
