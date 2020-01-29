import PropTypes from 'prop-types'
import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import resolveConfig from 'tailwindcss/resolveConfig'

import Container from '../Container'
import PublicationDate from '../PublicationDate'
import Author from '../Author'

const screens = resolveConfig().theme.screens

const ArticleHeroFull = ({
	title,
	introduction,
	author,
	publication_date,
	image,
}) => (
	<StyledSection className="w-full font-sans relative">
		<StyledImageContainer className="absolute top-0 left-0 w-full h-full ">
			<Img fluid={image} className="w-full h-full" />
		</StyledImageContainer>
		<Container className="relative h-full flex items-center justify-center">
			<div className="px-4 w-full md:w-10/12 lg:w-8/12 mx-auto text-center">
				<div className="mb-6">
					<span className="text-sm text-gray-200 block">
						Publicerad
					</span>
					<PublicationDate
						className="text-base text-white block"
						publication_date={publication_date}
					/>
				</div>
				<h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">
					{title}
				</h1>
				<p className="text-white text-base max-w-xl text-white mb-8 mx-auto">
					{introduction}
				</p>
				<Author {...author} />
			</div>
		</Container>
	</StyledSection>
)

const StyledSection = styled.section`
	height: 80vh;

	@media screen and (min-width: ${screens.md}) {
		height: 70vh;
	}

	@media screen and (min-width: ${screens.xl}) {
		height: 80vh;
	}
`

const StyledImageContainer = styled.div`
	&:after {
		content: '';
		${tw`absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-black opacity-50`}
	}
`

ArticleHeroFull.propTypes = {
	title: PropTypes.string.isRequired,
	introduction: PropTypes.string.isRequired,
	author: PropTypes.object.isRequired,
	publication_date: PropTypes.number.isRequired,
	image: PropTypes.object.isRequired,
}

export default ArticleHeroFull
