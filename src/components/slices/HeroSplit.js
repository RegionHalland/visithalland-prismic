import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-scroll-parallax'

import BackgroundPattern from '../../images/bg-pattern.svg'
import Image from '../Image'
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
}) => {
	return (
		<div className="lg:px-6">
			<Container className="flex flex-wrap md:flex-row-reverse">
				<Backdrop className="absolute w-full top-0 left-0 right-0 h-48 bg-blue-700" />
				<div className="w-full lg:w-6/12 pl-4 lg:pl-0">
					<Parallax y={[10, -10]}>
						<ImageContainer className="h-70vh md:h-80vh lg:h-90vh w-full lg:w-50vw mt-24 md:mt-32 mb-8 relative">
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
								<Image
									style={{ position: 'absolute' }}
									className="h-full w-full bottom-0 top-0 left-0 z-0"
									objectFit="cover"
									objectPosition="50% 50%"
									fluid={image}
								/>
							)}
						</ImageContainer>
					</Parallax>
				</div>
				<div className="w-full lg:w-6/12 px-4 lg:px-0 flex items-end lg:pb-32">
					<div className="w-full mx-auto">
						<h1 className="text-4xl md:text-5xl lg:text-6xl w-full lg:w-10/12 leading-tight font-semibold mb-8">
							{title}
						</h1>
						{introduction && (
							<StyledIntroduction className="mb-2 md:w-10/12">
								<TextRenderer
									className="md:text-center"
									text={introduction}
								/>
							</StyledIntroduction>
						)}
						{author.name && (
							<Author className="w-full flex" {...author} />
						)}
					</div>
				</div>
			</Container>
		</div>
	)
}

const StyledIntroduction = styled.div`
	> p {
		${tw`text-gray-700 text-xl leading-relaxed mb-8`};
		& > strong {
			${tw`font-semibold text-black`}
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

const Backdrop = styled.div`
	background-image: url(${BackgroundPattern});
`

HeroSplit.propTypes = {
	title: PropTypes.string,
	introduction: PropTypes.arrayOf(PropTypes.object),
	author: PropTypes.object,
	publicationDate: PropTypes.string.isRequired,
	image: PropTypes.object,
}

export default HeroSplit
