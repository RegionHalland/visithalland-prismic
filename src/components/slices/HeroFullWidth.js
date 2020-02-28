import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import Image from '../Image'
import TextRenderer from '../TextRenderer'
import Author from '../Author'
import Container from '../Container'

const HeroFullWidth = ({
	title,
	introduction,
	author,
	publicationDate,
	image,
}) => {
	return (
		<React.Fragment>
			<ImageContainer className="h-70vh md:h-70vh lg:h-80vh w-full flex items-center justify-center relative mb-12 px-4 md:px-6">
				<h1 className="text-4xl md:text-5xl lg:text-6xl w-full leading-tight text-white font-semibold  md:w-6/12 text-center relative z-10">
					{title}
				</h1>
				<Image
					style={{ position: 'absolute' }}
					className="h-full w-full bottom-0 top-0 left-0 z-0"
					objectFit="cover"
					objectPosition="50% 50%"
					fluid={image}
				/>
			</ImageContainer>
			<Container className="px-4 md:px-6 mb-20" tight>
				<div className="w-full md:w-10/12 mx-auto">
					{introduction && (
						<StyledIntroduction className="mb-2">
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
				</div>
			</Container>
		</React.Fragment>
	)
}

const StyledIntroduction = styled.div`
	> p {
		${tw`text-gray-700 text-xl md:text-center leading-relaxed mb-8`};
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

HeroFullWidth.propTypes = {
	title: PropTypes.string,
	introduction: PropTypes.arrayOf(PropTypes.object),
	author: PropTypes.object,
	publicationDate: PropTypes.string.isRequired,
	image: PropTypes.object,
}

export default HeroFullWidth
