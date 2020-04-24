import React from 'react'
import PropTypes from 'prop-types'
import Carousel from 'nuka-carousel'

import ArticleCard from '../ArticleCard'
import ArrowRightIcon from '../icons/ArrowRightIcon'
import ArrowLeftIcon from '../icons/ArrowLeftIcon'
import IconButton from '../IconButton'

import { linkResolver } from '../../utils/linkResolver'

const CollectionCarouselLarge = ({ items }) => {
	return (
		<div className="bg-green-600">
			<Carousel
				className="focus:outline-none"
				frameOverflow="visible"
				slidesToShow={1}
				transitionMode="fade"
				wrapAround={true}
				renderBottomCenterControls={() => null}
				renderCenterLeftControls={({ previousSlide }) => (
					<div className="pl-3">
						<IconButton
							onClick={previousSlide}
							icon={
								<ArrowLeftIcon className="h-3 w-3 text-gray-400" />
							}
						/>
					</div>
				)}
				renderCenterRightControls={({ nextSlide }) => (
					<div className="pr-3">
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
						{ title, tags, meta, image, alt, copyright, url },
						index,
					) => (
						<div className="focus:outline-none">
							<ArticleCard
								key={`${index}-${meta.uid}`}
								title={title}
								image={image}
								copyright={copyright}
								alt={alt}
								className="h-500px md:h-900px w-full text-3xl  md:text-5xl"
								tags={tags}
								url={url}
								to={linkResolver(meta)}
								index={index}
							/>
						</div>
					),
				)}
			</Carousel>
		</div>
	)
}

CollectionCarouselLarge.propTypes = {
	items: PropTypes.array.isRequired,
}

export default CollectionCarouselLarge
