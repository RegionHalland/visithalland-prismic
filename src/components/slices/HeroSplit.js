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
		<React.Fragment>
			<Container>
				<div className="flex flex-wrap -mx-3 py-12 lg:py-16  px-4 lg:px-6">
					<div className="w-full md:w-6/12 px-3">
						<h1 className="text-4xl md:text-5xl lg:text-6xl text-black w-full max-w-2xl md:pr-4 leading-tight font-bold mb-8 break-words">
							{title}
						</h1>
					</div>
					<div className="w-full md:w-6/12 px-3">
						{introduction && (
							<StyledIntroduction className="mb-2 max-w-2xl md:mt-2 lg:mt-3">
								<TextRenderer
									className="md:text-center"
									text={introduction}
								/>
							</StyledIntroduction>
						)}
						{author && (
							<Author className="w-full flex" {...author} />
						)}
					</div>
				</div>
			</Container>
			<div className="w-full mb-8 md:mb-0">
				<div className="h-60vh md:h-60vh lg:h-70vh w-full relative">
					{video && (
						<video
							muted
							loop
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
				</div>
			</div>
		</React.Fragment>
	)
}

const StyledIntroduction = styled.div`
	> p {
		${tw`text-black text-lg md:text-xl leading-relaxed mb-8`};
		& > strong {
			${tw`font-medium`}
		}
		& > em {
			${tw`font-italic`}
		}
		& > a {
			${tw`font-medium underline`}
		}
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
