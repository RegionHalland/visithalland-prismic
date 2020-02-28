import React from 'react'
import PropTypes from 'prop-types'
import Carousel from 'nuka-carousel'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Button from '../Button'
import Image from '../Image'
import CarouselArrow from '../CarouselArrow'

import { linkResolver } from '../../utils/linkResolver'

const CollectionCarouselLarge = ({ items }) => {
	return (
		<Carousel
			className="border-4"
			renderBottomCenterControls={() => null}
			renderCenterLeftControls={({ previousSlide }) => (
				<CarouselArrow onClick={previousSlide} direction="left" />
			)}
			renderCenterRightControls={({ nextSlide }) => (
				<CarouselArrow onClick={nextSlide} direction="right" />
			)}
		>
			{items.map(({ title, meta, image }, index) => (
				<div key={`${index}-${meta.uid}`}>
					<Image fluid={image} />
				</div>
			))}
		</Carousel>
	)
}

const Center = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`

CollectionCarouselLarge.propTypes = {
	items: PropTypes.array.isRequired,
}

export default CollectionCarouselLarge
