import PropTypes from 'prop-types'
import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import resolveConfig from 'tailwindcss/resolveConfig'

import Container from '../Container'
import PublicationDate from '../PublicationDate'
import Author from '../Author'
import TextRenderer from '../TextRenderer'

const screens = resolveConfig().theme.screens

const ArticleHeroSplit = ({
	title,
	introduction,
	author,
	publicationDate,
	image,
}) => (
	<section className="w-full font-sans">
		<Container className="md:p-4">
			<div className="flex flex-col-reverse md:flex-row flex-wrap md:-mx-3">
				<div className="px-3 py-4 w-full md:w-6/12 flex flex-col md:justify-between">
					<div className="mb-4">
						<span className="text-sm text-gray-600 block">
							Publicerad
						</span>
						<PublicationDate
							className="text-base text-black block"
							publicationDate={publicationDate}
						/>
					</div>
					<div className="mb-6 w-full md:w-10/12">
						<h1 className="text-3xl md:text-4xl font-semibold mb-4">
							{title}
						</h1>
						<div className="text-gray-700 text-base">
							<TextRenderer text={introduction} />
						</div>
					</div>
					<Author {...author} />
				</div>
				<ImageContainer className="md:px-3 w-full md:w-6/12 mb-4 md:mb-0 relative">
					{image && (
						<Img
							style={{ position: 'absolute' }}
							className="h-full w-full bottom-0 top-0 left-0 z-0"
							objectFit="cover"
							objectPosition="50% 50%"
							fluid={image}
						/>
					)}
				</ImageContainer>
			</div>
		</Container>
	</section>
)

const ImageContainer = styled.div`
	height: 60vh;
	@media screen and (min-width: ${screens.md}) {
		height: 70vh;
	}
	@media screen and (min-width: ${screens.xl}) {
		height: 80vh;
	}
`

ArticleHeroSplit.propTypes = {
	title: PropTypes.string.isRequired,
	introduction: PropTypes.arrayOf(PropTypes.object).isRequired,
	author: PropTypes.object.isRequired,
	publicationDate: PropTypes.string.isRequired,
	image: PropTypes.object,
}

export default ArticleHeroSplit
