import React from 'react'
import PropTypes from 'prop-types'
import Carousel from 'nuka-carousel'

import Container from '../Container'
import ArticleCard from '../ArticleCard'

import ArrowRightIcon from '../icons/ArrowRightIcon'
import ArrowLeftIcon from '../icons/ArrowLeftIcon'
import IconButton from '../IconButton'

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
					<div className="pl-3 md:pl-0">
						<IconButton
							onClick={previousSlide}
							icon={
								<ArrowLeftIcon className="h-3 w-3 text-gray-400" />
							}
						/>
					</div>
				)}
				renderCenterRightControls={({ nextSlide }) => (
					<div className="pr-3 md:pr-0">
						<IconButton
							onClick={nextSlide}
							icon={
								<ArrowRightIcon className="h-3 w-3 text-gray-400" />
							}
						/>
					</div>
				)}
			>
				{items.map(
					(
						{ title, tags, meta, image, copyright, alt, url },
						index,
					) => (
						<div className="px-2 text-2xl focus:outline-none">
							<ArticleCard
								key={`${index}-${meta.uid}`}
								title={title}
								image={image}
								copyright={copyright}
								className="h-500px md:h-500px w-full text-2xl rounded md:text-3xl"
								alt={alt}
								tags={tags}
								url={url}
								to={linkResolver(meta)}
								index={index}
							/>
						</div>
					),
				)}
			</Carousel>
		</Container>
	)
}

CollectionCarouselSmall.propTypes = {
	items: PropTypes.array.isRequired,
}

export default CollectionCarouselSmall
