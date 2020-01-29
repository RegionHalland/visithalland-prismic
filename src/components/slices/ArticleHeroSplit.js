import PropTypes from 'prop-types'
import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import Container from '../Container'
import PublicationDate from '../PublicationDate'
import Author from '../Author'

const ArticleHeroSplit = ({
	title,
	introduction,
	author,
	publication_date,
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
							publication_date={publication_date}
						/>
					</div>
					<div className="mb-6 w-full md:w-10/12">
						<h1 className="text-3xl md:text-4xl font-semibold mb-4">
							{title}
						</h1>
						<p className="text-gray-700 text-base">
							{introduction}
						</p>
					</div>
					<Author {...author} />
				</div>
				<div className="md:px-3 w-full md:w-6/12 mb-4 md:mb-0">
					<Img fluid={image} />
				</div>
			</div>
		</Container>
	</section>
)

ArticleHeroSplit.propTypes = {
	title: PropTypes.string.isRequired,
	introduction: PropTypes.string.isRequired,
	author: PropTypes.object.isRequired,
	publication_date: PropTypes.number.isRequired,
	image: PropTypes.object.isRequired,
}

export default ArticleHeroSplit
