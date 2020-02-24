import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { linkResolver } from '../../utils/linkResolver'
import Image from '../Image'

const HeroCarousel = ({ items }) => (
	<div className="HAHAHAHAHAHAH">
		{items.map(({ title, buttonLabel, meta, image }, index) => (
			<div key={`${title}-${index}`}>
				<h2>{title}</h2>
				<Image fluid={image} />
				<Link to={linkResolver(meta)}>{buttonLabel}</Link>
			</div>
		))}
	</div>
)

HeroCarousel.propTypes = {
	items: PropTypes.array.isRequired,
}

export default HeroCarousel
