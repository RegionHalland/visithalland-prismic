import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Image from '../Image'
import ImageCopyright from '../ImageCopyright'
import TextRenderer from '../TextRenderer'
import Author from '../Author'
import Container from '../Container'
import ArrowDownIcon from '../icons/ArrowDownIcon'

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
		<ImageContainer className="h-100vh w-full flex items-end justify-center relative mb-12 px-4 md:px-6">
			<Container className="z-10 relative" tight>
				<h1 className="text-4xl md:text-5xl lg:text-6xl mb-8 w-full lg:w-10/12 mx-auto text-center leading-tight text-white font-semibold">
					{title}
				</h1>
				{introduction && (
					<StyledIntroduction className="mb-2">
						<TextRenderer text={introduction} />
					</StyledIntroduction>
				)}
				{author.name && (
					<Author
						className="w-full flex justify-center text-white mb-12"
						{...author}
					/>
				)}
				<div className="h-12 w-12 mx-auto rounded-full bg-blue-700 flex items-center justify-center mb-16">
					<ArrowDownIcon
						height={16}
						width={16}
						className="text-white"
					/>
				</div>
			</Container>
			{video && (
				<video
					loop
					muted
					autoplay="autoplay"
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
		${tw`text-white hidden md:block text-xl text-center leading-relaxed mb-8`};
		& > strong {
			${tw`font-semibold`}
		}
		& > em {
			${tw`font-italic text-black`}
		}
		& > a {
			${tw`font-semibold text-black underline`}
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
