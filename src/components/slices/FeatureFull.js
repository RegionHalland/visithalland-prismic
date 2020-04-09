import React from 'react'
import PropTypes from 'prop-types'
import { linkResolver } from '../../utils/linkResolver'
import Image from '../Image'
import Button from '../Button'
import Container from '../Container'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const FeatureFull = ({ title, image, meta, buttonLabel, url }) => (
	<ImageContainer className="h-60vh lg:h-70vh w-full flex items-center justify-center relative px-4 md:px-6">
		<Container className="z-10 relative w-full text-center">
			<h1 className="text-4xl md:text-5xl md:w-10/12 mx-auto mb-6 w-full text-center leading-tight text-white font-semibold">
				{title}
			</h1>
			<Button title={buttonLabel} to={linkResolver(meta)} url={url} />
		</Container>
		<Image
			style={{ position: 'absolute' }}
			className="h-full w-full bottom-0 top-0 left-0 z-0"
			objectFit="cover"
			objectPosition="50% 50%"
			fluid={image}
		/>
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
