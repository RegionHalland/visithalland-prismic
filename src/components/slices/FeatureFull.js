import React from 'react'
import PropTypes from 'prop-types'
import { linkResolver } from '../../utils/linkResolver'
import Image from '../Image'
import ImageCopyright from '../ImageCopyright'
import Button from '../Button'
import TextRenderer from '../TextRenderer'
import Container from '../Container'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const FeatureFull = ({
	title,
	body,
	image,
	copyright,
	meta,
	alt,
	buttonLabel,
	url,
}) => (
	<ImageContainer className="h-60vh lg:h-70vh w-full flex items-center justify-center relative px-4 md:px-6">
		<Container className="z-10 relative w-full text-center">
			<h1 className="text-4xl md:text-5xl md:w-10/12 mx-auto mb-6 w-full text-center leading-tight text-white font-semibold">
				{title}
			</h1>
			<div className="text-white mb-6 md:w-8/12 mx-auto">
				<TextRenderer text={body}></TextRenderer>
			</div>
			<Button title={buttonLabel} to={linkResolver(meta)} url={url} />
		</Container>
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
	</ImageContainer>
)

const ImageContainer = styled.div`
	&:after {
		content: '';
		${tw`bg-black h-full w-full absolute top-0 left-0`}
		opacity:0.1;
	}
`

FeatureFull.propTypes = {
	title: PropTypes.string.isRequired,
	linkType: PropTypes.string.isRequired,
	buttonLabel: PropTypes.string.isRequired,
	image: PropTypes.object,
	meta: PropTypes.object.isRequired,
	url: PropTypes.string,
}

export default FeatureFull
