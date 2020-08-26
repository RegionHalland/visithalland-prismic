import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import Image from '../Image'
import ImageCopyright from '../ImageCopyright'
import TextRenderer from '../TextRenderer'
import Author from '../Author'
import Container from '../Container'
import ScrollIndicator from '../ScrollIndicator'

const HeroFullWidthImageOverlay = ({
	title,
	introduction,
	author,
	image,
	imageOverlay,
	video,
	alt,
	copyright,
}) => {
	return (
		<React.Fragment>
			<ImageContainer className="h-70vh md:h-60vh lg:h-70vh w-full flex items-center justify-center relative mb-10 px-4 md:px-6">
				<div className="flex justify-center flex-col items-center w-full">
					{!!imageOverlay ? (
						<div className="relative z-10 w-full px-3 max-w-sm h-auto lg:max-w-lg mb-5">
							<Image
								className="w-full h-full"
								objectFit="cover"
								objectPosition="50% 50%"
								fluid={imageOverlay}
								alt={title}
							/>
						</div>
					) : (
						<h1 className="text-4xl md:text-5xl lg:text-6xl w-full leading-tight text-white font-bold  mb-4 md:w-6/12 text-center relative z-10">
							{title}
						</h1>
					)}
					<ScrollIndicator className="shadow-lg relative z-10 mx-auto" />
				</div>
				{video && (
					<video
						loop
						muted
						autoPlay="autoPlay"
						playsInline
						className="absolute h-full w-full bottom-0 top-0 left-0 z-0 object-cover"
						src={video}
					></video>
				)}
				{!video && (
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
				)}
			</ImageContainer>
			<Container className="px-4 md:px-6" tight>
				<div className="w-full md:w-10/12 mx-auto">
					{introduction && !!introduction.length && (
						<StyledIntroduction>
							<TextRenderer
								className="md:text-center"
								text={introduction}
							/>
						</StyledIntroduction>
					)}
					{author.name && (
						<Author
							className="w-full flex md:justify-center"
							{...author}
						/>
					)}
					<div className="bg-green-600 w-6 h-1 mb-4 mt-6 mx-auto rounded" />
				</div>
			</Container>
		</React.Fragment>
	)
}

const StyledIntroduction = styled.div`
	> p {
		${tw`text-gray-700 text-xl md:text-center leading-relaxed mb-10`};
		& > strong {
			${tw`font-medium text-black`}
		}
		& > em {
			${tw`font-italic text-black`}
		}
		& > a {
			${tw`font-medium text-black underline`}
		}
	}
`

const ImageContainer = styled.div`
	&:after {
		content: '';
		${tw`bg-black h-full w-full absolute top-0 left-0`}
		opacity:0.1;
	}
`

HeroFullWidthImageOverlay.propTypes = {
	title: PropTypes.string,
	introduction: PropTypes.arrayOf(PropTypes.object),
	author: PropTypes.object,
	image: PropTypes.object,
	imageOverlay: PropTypes.object,
}

export default HeroFullWidthImageOverlay
