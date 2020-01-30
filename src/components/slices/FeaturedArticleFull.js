import PropTypes from 'prop-types'
import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import Container from '../Container'
import ButtonLink from '../ButtonLink'

const FeaturedArticleFull = ({ title, excerpt, image, to }) => (
	<Container>
		<div className="w-full font-sans relative">
			<StyledImageContainer>
				<Img fluid={image} className="w-full h-full" />
			</StyledImageContainer>
			<div className="absolute w-full h-full top-0 left-0">
				<Container className="relative h-full flex items-end">
					<div className="p-4 md:p-8 w-full">
						<h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">
							{title}
						</h1>
						<ButtonLink to={to} title="Gå till artikel" />
					</div>
				</Container>
			</div>
		</div>
	</Container>
)

const StyledImageContainer = styled.div`
	&:after {
		content: '';
		${tw`absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-black opacity-50`}
	}
`

FeaturedArticleFull.propTypes = {
	title: PropTypes.string.isRequired,
	image: PropTypes.object.isRequired,
}

export default FeaturedArticleFull
