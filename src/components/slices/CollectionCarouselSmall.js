import React from 'react'
import PropTypes from 'prop-types'
import Carousel from 'nuka-carousel'
import Link from 'gatsby-link'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import Image from '../Image'
import Container from '../Container'
import CarouselArrow from '../CarouselArrow'
import ConditionalWrapper from '../ConditionalWrapper'

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
				{items.map(({ title, tags, meta, image, url }, index) => (
					<div className="px-2" key={`${index}-${meta.uid}`}>
						<ImageContainer className="rounded overflow-hidden">
							<Image
								style={{ position: 'absolute' }}
								className="h-full w-full bottom-0 top-0 left-0 z-0"
								objectFit="cover"
								objectPosition="50% 50%"
								fluid={image}
							/>
						</ImageContainer>
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

							<ConditionalWrapper
								condition={url}
								ifWrapper={children => (
									<a
										className="text-black text-2xl md:text-3xl leading-tight font-semibold"
										href={url}
									>
										{children}
									</a>
								)}
								elseWrapper={children => (
									<Link
										className="text-black text-2xl md:text-3xl leading-tight font-semibold"
										to={linkResolver(meta)}
									>
										{children}
									</Link>
								)}
							>
								{title}
							</ConditionalWrapper>
						</div>
					</div>
				))}
			</Carousel>
		</Container>
	)
}

const ImageContainer = styled.div`
	padding-bottom: 100%;
	${tw`relative`};
`

CollectionCarouselSmall.propTypes = {
	items: PropTypes.array.isRequired,
}

export default CollectionCarouselSmall
