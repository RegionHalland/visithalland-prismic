import PropTypes from 'prop-types'
import React from 'react'
import Img from 'gatsby-image'

import Container from '../Container'
import Button from '../Button'

const FeaturedArticleFull = ({ title, excerpt, image }) => (
	<div className="w-full font-sans relative">
		<Img fluid={image} className="w-full h-full" />
		<div className="absolute w-full h-full top-0 left-0">
			<Container className="relative h-full flex items-end">
				<div className="px-4 py-4 md:py-8 w-full">
					<h1 className="text-3xl md:text-4xl font-semibold text-white mb-6">
						{title}
					</h1>
					<Button title="Gå till artikel" />
				</div>
			</Container>
		</div>
	</div>
)

FeaturedArticleFull.propTypes = {
	title: PropTypes.string.isRequired,
	image: PropTypes.object.isRequired,
}

export default FeaturedArticleFull
