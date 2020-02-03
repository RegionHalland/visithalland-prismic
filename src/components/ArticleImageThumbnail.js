import propTypes from 'prop-types'
import React from 'react'

import styled from 'styled-components'

import Link from 'gatsby-link'
import Img from 'gatsby-image'

const ArticleImageThumbnail = ({ title, image, tags, to, ...props }) => (
	<StyledLink
		to={to}
		{...props}
		className="block relative px-3 md:px-4 pb-4  overflow-hidden w-full outline-none"
	>
		<div className="absolute bottom-0 left-0 right-0 px-3 m:px-4 pb-3 md:pb-4 z-10">
			<div>
				{tags.map((tag, index) => (
					<span
						key={index}
						className="text-gray-300 inline-block mr-2 text-base mb-2 font-sans"
					>
						{tag}
					</span>
				))}
			</div>
			<h2 className="font-sans text-white text-2xl md:text-3xl font-semibold mb-2">
				{title}
			</h2>
		</div>
		{image && (
			<Img
				style={{ position: 'absolute' }}
				className="h-full w-full bottom-0 top-0 left-0 z-0 articleCard--inner"
				objectFit="cover"
				objectPosition="50% 50%"
				fluid={image}
			/>
		)}
	</StyledLink>
)

const StyledLink = styled(Link)`
	padding-bottom: 100%;
`

ArticleImageThumbnail.propTypes = {
	to: propTypes.string.isRequired,
	title: propTypes.string.isRequired,
	image: propTypes.object,
}

export default ArticleImageThumbnail
