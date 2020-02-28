import React from 'react'
import PropTypes from 'prop-types'
import { linkResolver } from '../../utils/linkResolver'
import { Parallax } from 'react-scroll-parallax'
import Image from '../Image'
import ButtonLink from '../ButtonLink'
import Container from '../Container'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import BackgroundPattern from '../../images/bg-pattern.svg'

const FeatureOverlay = ({ title, image, meta, buttonLabel, url }) => (
	<React.Fragment>
		<div className="h-60vh lg:h-70vh w-full flex items-end relative px-4 md:px-6 -mb-32">
			<Image
				style={{ position: 'absolute' }}
				className="h-full w-full bottom-0 top-0 left-0 z-0"
				objectFit="cover"
				objectPosition="50% 50%"
				fluid={image}
			/>
		</div>
		<Parallax y={[10, -10]} className="w-full">
			<Container className="z-10 relative w-full relative flex justify-start px-4 md:px-6">
				<Overlay className="bg-blue-600 py-6 px-8 md:py-8 md:px-10 w-full md:w-8/12 lg:w-6/12">
					<h1 className="text-2xl md:text-4xl mx-auto mb-6 w-full leading-tight text-white font-semibold">
						{title}
					</h1>
					<ButtonLink
						title={buttonLabel}
						to={linkResolver(meta)}
						url={url}
					/>
				</Overlay>
			</Container>
		</Parallax>
	</React.Fragment>
)

const Overlay = styled.div`
	background-image: url(${BackgroundPattern});
`

FeatureOverlay.propTypes = {
	title: PropTypes.string.isRequired,
	linkType: PropTypes.string.isRequired,
	buttonLabel: PropTypes.string.isRequired,
	image: PropTypes.object,
	meta: PropTypes.object.isRequired,
	url: PropTypes.string,
}

export default FeatureOverlay
