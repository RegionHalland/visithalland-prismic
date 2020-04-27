import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import Image from '../Image'
import ImageCopyright from '../ImageCopyright'
import TextRenderer from '../TextRenderer'
import Author from '../Author'
import Container from '../Container'

const HeroSplit = ({
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
		<Container className="flex flex-wrap">
			<div className="w-full md:w-6/12 mb-8 lg:mb-0">
				<ImageContainer className="h-70vh md:h-80vh lg:h-90vh w-full relative">
					{video && (
						<video
							muted
							loop
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
			</div>
			<div className="w-full md:w-6/12 flex flex-col justify-center px-4 lg:px-8">
				<h1 className="text-4xl md:text-5xl lg:text-6xl w-full lg:w-10/12 leading-tight font-bold mb-8">
					{title}
				</h1>
				{introduction && (
					<StyledIntroduction className="mb-2 max-w-2xl">
						<TextRenderer
							className="md:text-center"
							text={introduction}
						/>
					</StyledIntroduction>
				)}
				{author && <Author className="w-full flex" {...author} />}
			</div>
		</Container>
	)
}

const StyledIntroduction = styled.div`
	> p {
		${tw`text-gray-700 text-xl leading-relaxed mb-8`};
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

HeroSplit.propTypes = {
	title: PropTypes.string,
	introduction: PropTypes.arrayOf(PropTypes.object),
	author: PropTypes.object,
	publicationDate: PropTypes.string.isRequired,
	image: PropTypes.object,
}

export default HeroSplit
