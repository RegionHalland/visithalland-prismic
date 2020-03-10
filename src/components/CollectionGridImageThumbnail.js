import propTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'

import Image from './Image'
import ConditionalWrapper from './ConditionalWrapper'
import Link from 'gatsby-link'

const config = resolveConfig(tailwindConfig)

const CollectionGridImageThumbnail = ({
	title,
	image,
	tags,
	to,
	size,
	url,
	...props
}) => (
	<ConditionalWrapper
		condition={url}
		ifWrapper={children => (
			<StyledHref
				className="block relative px-3 md:px-4 pb-4 overflow-hidden rounded w-full outline-none"
				{...props}
				href={url}
			>
				{children}
			</StyledHref>
		)}
		elseWrapper={children => (
			<StyledLink
				to={to}
				{...props}
				className="block relative px-3 md:px-4 pb-4 overflow-hidden rounded w-full outline-none"
			>
				{children}
			</StyledLink>
		)}
	>
		<React.Fragment>
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
				<h2 className="font-sans text-white font-semibold mb-2 leading-tight">
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
		</React.Fragment>
	</ConditionalWrapper>
)

const StyledImage = styled(Image)`
	transition: transform 0.25s;
`

const StyledHref = styled.a`
	height: 400px;
	@media (min-width: ${config.theme.screens.lg}) {
		height: 500px;
	}
	&:after {
		content: '';
		${tw`bg-black h-full w-full absolute top-0 left-0`}
		opacity:0.1;
	}

	&:hover ${StyledImage} {
		transform: scale(1.05);
	}
`

const StyledLink = styled(Link)`
	height: 400px;
	@media (min-width: ${config.theme.screens.lg}) {
		height: 500px;
	}
	&:after {
		content: '';
		${tw`bg-black h-full w-full absolute top-0 left-0`}
		opacity:0.1;
	}

	&:hover ${StyledImage} {
		transform: scale(1.05);
	}
`

CollectionGridImageThumbnail.propTypes = {
	to: propTypes.string.isRequired,
	size: propTypes.string,
	title: propTypes.string.isRequired,
	image: propTypes.object,
}

export default CollectionGridImageThumbnail
