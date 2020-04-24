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
					<IconButton
						onClick={previousSlide}
						icon={
							<ArrowLeftIcon className="h-3 w-3 text-gray-400" />
						}
					/>
				)}
				renderCenterRightControls={({ nextSlide }) => (
					<IconButton
						onClick={nextSlide}
						icon={
							<ArrowRightIcon className="h-3 w-3 text-gray-400" />
						}
					/>
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
