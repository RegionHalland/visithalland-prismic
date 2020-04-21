import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { linkResolver } from '../../utils/linkResolver'
import Image from '../Image'
import ImageCopyright from '../ImageCopyright'

const HeroCarousel = ({ items }) => (
	<div>
		{items.map(
			({ title, buttonLabel, meta, image, alt, copyright }, index) => (
				<div key={`${title}-${index}`}>
					<h2>{title}</h2>
					<div>
						<Image fluid={image} alt={alt} />
						<ImageCopyright credits={copyright} />
					</div>
					<Link to={linkResolver(meta)}>{buttonLabel}</Link>
				</div>
			),
		)}
	</div>
)

HeroCarousel.propTypes = {
	items: PropTypes.array.isRequired,
}

export default HeroCarousel
