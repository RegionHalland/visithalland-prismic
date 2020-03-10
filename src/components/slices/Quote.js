import React from 'react'
import PropTypes from 'prop-types'
import { linkResolver } from '../../utils/linkResolver'
import { Parallax } from 'react-scroll-parallax'
import Image from '../Image'
import ButtonLink from '../ButtonLink'
import Container from '../Container'
import styled from 'styled-components'
import BackgroundPattern from '../../images/bg-pattern.svg'

const Quote = ({ quote, byline, image, meta, buttonLabel, url }) => (
	<div className="bg-sand-300 py-12 mt-32">
		<Container className="px-4 lg:px-6 flex flex-wrap -mx-3">
			<div className="h-40vh lg:h-60vh w-full md:w-6/12 px-3 rounded overflow-hidden relative -mt-32 mb-6 md:mb-0">
				<Image
					style={{ position: 'absolute' }}
					className="h-full w-full bottom-0 top-0 left-0 z-0"
					objectFit="cover"
					objectPosition="50% 50%"
					fluid={image}
				/>
			</div>

			<div className="w-full md:w-6/12 md:pl-6">
				<blockquote className="text-2xl md:text-3xl lg:text-4xl mx-auto mb-6 w-full leading-tight text-black font-semibold">
					“{quote}”
				</blockquote>
				<span className="block mb-6 text-lg text-gray-600">
					- {byline}
				</span>
				<ButtonLink
					title={buttonLabel}
					to={linkResolver(meta)}
					url={url}
				/>
			</div>
		</Container>
	</div>
)
Quote.propTypes = {
	quote: PropTypes.string.isRequired,
	byline: PropTypes.string,
	linkType: PropTypes.string.isRequired,
	buttonLabel: PropTypes.string.isRequired,
	image: PropTypes.object,
	meta: PropTypes.object.isRequired,
	url: PropTypes.string,
}

export default Quote
