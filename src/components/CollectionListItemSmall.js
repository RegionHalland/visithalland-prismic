import propTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import ConditionalWrapper from './ConditionalWrapper'
import Image from './Image'
import Link from 'gatsby-link'

import TextRenderer from './TextRenderer'

const CollectionListItemSmall = ({
	title,
	excerpt,
	image,
	to,
	url,
	...props
}) => {
	console.log(excerpt)
	return (
		<ConditionalWrapper
			condition={url}
			ifWrapper={children => (
				<StyledHref {...props} href={url}>
					{children}
				</StyledHref>
			)}
			elseWrapper={children => (
				<StyledLink to={to} {...props}>
					{children}
				</StyledLink>
			)}
		>
			<div className="flex flex-wrap">
				<div className="w-32 h-48 md:w-48 md:h-64 overflow-hidden rounded relative">
					{image && (
						<div>
							<StyledImage
								style={{ position: 'absolute' }}
								className="h-full w-full bottom-0 top-0 left-0 z-0"
								objectFit="cover"
								objectPosition="50% 50%"
								fluid={image}
							/>
						</div>
					)}
				</div>
				<div className="flex flex-col md:justify-center flex-1 pl-4 md:pl-6 ">
					<h2 className="text-black text-xl md:text-3xl leading-tight font-medium mb-3">
						{title}
					</h2>
					{excerpt && (
						<div className="text-base text-gray-700">
							<TextRenderer text={excerpt} />
						</div>
					)}
				</div>
			</div>
		</ConditionalWrapper>
	)
}

const StyledImage = styled(Image)`
	transition: transform 0.25s;
`

const StyledLink = styled(Link)`
	&:hover ${StyledImage} {
		transform: scale(1.1);
	}
`

const StyledHref = styled.a`
	&:hover ${StyledImage} {
		transform: scale(1.1);
	}
`

CollectionListItemSmall.propTypes = {
	title: propTypes.string.isRequired,
	to: propTypes.string.isRequired,
	excerpt: propTypes.arrayOf(propTypes.object),
	image: propTypes.object,
}

export default CollectionListItemSmall
