import React from 'react'
import PropTypes from 'prop-types'
import Carousel from 'nuka-carousel'

import Button from '../Button'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import Image from '../Image'
import ImageCopyright from '../ImageCopyright'
import Container from '../Container'
import CarouselArrow from '../CarouselArrow'

import { linkResolver } from '../../utils/linkResolver'

const CollectionCarouselLarge = ({ items }) => {
	return (
		<Carousel
			className="focus:outline-none"
			frameOverflow="visible"
			slidesToShow={1}
			wrapAround={true}
			renderBottomCenterControls={() => null}
			renderCenterLeftControls={({ previousSlide }) => (
				<CarouselArrow onClick={previousSlide} direction="left" />
			)}
			renderCenterRightControls={({ nextSlide }) => (
				<CarouselArrow onClick={nextSlide} direction="right" />
			)}
		>
			{items.map(
				({ title, tags, meta, image, alt, copyright, url }, index) => (
					<ImageContainer
						key={`${index}-${meta.uid}`}
						className="h-60vh lg:h-80vh w-full flex items-center justify-center relative px-4 md:px-6"
					>
						<Container className="z-10 relative w-full text-center">
							{tags.length > 1 && (
								<div>
									{tags.map(item => (
										<span
											className="inline-block text-gray-500 font-medium mr-1"
											key={item}
										>
											{item}
										</span>
									))}
								</div>
							)}
							<h1 className="text-4xl md:text-5xl md:w-10/12 mx-auto mb-6 w-full text-center leading-tight text-white font-medium">
								{title}
							</h1>
							<Button
								title="Läs mer"
								to={linkResolver(meta)}
								url={url}
							/>
						</Container>
						<div>
							<Image
								style={{ position: 'absolute' }}
								className="h-full w-full bottom-0 top-0 left-0 z-0"
								objectFit="cover"
								objectPosition="50% 50%"
								fluid={image}
								alt={alt}
							/>
							<ImageCopyright credits={copyright} />
						</div>
					</ImageContainer>
				),
			)}
		</Carousel>
	)
}

const ImageContainer = styled.div`
	&:after {
		content: '';
		${tw`bg-black h-full w-full absolute top-0 left-0`}
		opacity:0.1;
	}
`

CollectionCarouselLarge.propTypes = {
	items: PropTypes.array.isRequired,
}

export default CollectionCarouselLarge
