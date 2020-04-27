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

const HeroFullScreen = ({
	title,
	introduction,
	author,
	publicationDate,
	image,
	video,
	alt,
	copyright,
}) => {
	return (
		<ImageContainer className="h-70vh md:h-70vh lg:h-80vh w-full flex items-end justify-start relative mb-12">
			<Container className="z-10 relative bg-gray w-full  px-4 md:px-6">
				<h1 className="text-4xl md:text-5xl lg:text-6xl max-w-2xl mb-8 w-full leading-tight text-white font-bold">
					{title}
				</h1>
				{introduction && (
					<StyledIntroduction className="mb-2 max-w-2xl">
						<TextRenderer text={introduction} />
					</StyledIntroduction>
				)}
				{author && (
					<Author className="mb-12" colorscheme="white" {...author} />
				)}
				<ScrollIndicator className="-mb-6 md:-mb-8 shadow-lg" />
			</Container>
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
	)
}

const StyledIntroduction = styled.div`
	> p {
		${tw`text-white text-lg md:text-xl leading-relaxed mb-8`};
		& > strong {
			${tw`font-medium`}
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

HeroFullScreen.propTypes = {
	title: PropTypes.string,
	introduction: PropTypes.arrayOf(PropTypes.object),
	author: PropTypes.object,
	publicationDate: PropTypes.string.isRequired,
	image: PropTypes.object,
}

export default HeroFullScreen
