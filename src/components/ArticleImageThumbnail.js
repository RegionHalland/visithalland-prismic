import propTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import Image from './Image'
import Link from 'gatsby-link'

const ArticleImageThumbnail = ({ title, image, tags, to, size, ...props }) => (
	<StyledLink
		to={to}
		{...props}
		className="block relative px-3 md:px-4 pb-4  overflow-hidden rounded w-full outline-none"
	>
		<div className="absolute bottom-0 left-0 right-0 h-full w-full flex items-center justify-center text-center p-3 z-10">
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
			<h2
				className={`font-sans text-white font-semibold mb-2 text-3xl leading-tight ${
					size === 'large' ? ' lg:text-4xl' : ' lg:text-3xl'
				}`}
			>
				{title}
			</h2>
		</div>
		{image && (
			<StyledImage
				style={{ position: 'absolute' }}
				className="h-full w-full bottom-0 top-0 left-0 z-0"
				objectFit="cover"
				objectPosition="50% 50%"
				fluid={image}
			/>
		)}
	</StyledLink>
)

const StyledImage = styled(Image)`
	transition: transform 0.25s;
`

const StyledLink = styled(Link)`
	height: 500px;
	&:after {
		content: '';
		${tw`bg-black h-full w-full absolute top-0 left-0`}
		opacity:0.1;
	}

	&:hover ${StyledImage} {
		transform: scale(1.05);
	}
`

ArticleImageThumbnail.propTypes = {
	to: propTypes.string.isRequired,
	size: propTypes.string,
	title: propTypes.string.isRequired,
	image: propTypes.object,
}

export default ArticleImageThumbnail
