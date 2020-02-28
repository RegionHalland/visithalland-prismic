import React from 'react'
import PropTypes from 'prop-types'
import Carousel from 'nuka-carousel'
import Link from 'gatsby-link'

import Image from '../Image'
import Container from '../Container'
import CarouselArrow from '../CarouselArrow'

import useTailwindBreakpoint from '../../hooks/useTailwindBreakpoint'
import { linkResolver } from '../../utils/linkResolver'

const CollectionCarouselSmall = ({ items }) => {
	const breakpoint = useTailwindBreakpoint()

	return (
		<Container tight>
			<Carousel
				className="px-4 focus:outline-none"
				frameOverflow="visible"
				slidesToShow={breakpoint === 'xs' ? 1 : 2}
				renderBottomCenterControls={() => null}
				renderCenterLeftControls={({ previousSlide }) => (
					<CarouselArrow onClick={previousSlide} direction="left" />
				)}
				renderCenterRightControls={({ nextSlide }) => (
					<CarouselArrow onClick={nextSlide} direction="right" />
				)}
			>
				{items.map(({ title, tags, meta, image }, index) => (
					<div className="px-2" key={`${index}-${meta.uid}`}>
						<div className="rounded overflow-hidden">
							<Image fluid={image} />
						</div>
						<div className="py-3">
							{tags.length > 1 && (
								<div>
									{tags.map(item => (
										<span
											className="inline-block text-gray-500 font-semibold mr-1"
											key={item}
										>
											{item}
										</span>
									))}
								</div>
							)}
							<Link
								className="text-black text-3xl font-semibold"
								to={linkResolver(meta)}
							>
								{title}
							</Link>
						</div>
					</div>
				))}
			</Carousel>
		</Container>
	)
}

CollectionCarouselSmall.propTypes = {
	items: PropTypes.array.isRequired,
}

export default CollectionCarouselSmall
