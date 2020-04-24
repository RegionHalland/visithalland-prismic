import propTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import ConditionalWrapper from './ConditionalWrapper'
import Image from './Image'
import ImageCopyright from './ImageCopyright'
import Link from 'gatsby-link'

import TextRenderer from './TextRenderer'

const ArticleListItem = ({
	title,
	excerpt,
	image,
	copyright,
	alt,
	to,
	url,
	...props
}) => (
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
		<div className="flex flex-wrap md:-mx-3">
			<div className="w-full md:w-5/12  md:px-3 mb-6">
				<div className="w-full h-40vh overflow-hidden relative">
					{image && (
						<div>
							<StyledImage
								style={{ position: 'absolute' }}
								className="h-full w-full bottom-0 md:rounded top-0 left-0 z-0"
								objectFit="cover"
								objectPosition="50% 50%"
								fluid={image}
								alt={alt}
							/>
							<ImageCopyright credits={copyright} />
						</div>
					)}
				</div>
			</div>
			<div className="w-full md:w-7/12 flex flex-col px-3">
				<h2 className="text-black text-2xl md:text-3xl leading-tight font-medium mb-3">
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

ArticleListItem.propTypes = {
	title: propTypes.string.isRequired,
	to: propTypes.string.isRequired,
	excerpt: propTypes.arrayOf(propTypes.object),
	image: propTypes.object,
}

export default ArticleListItem
