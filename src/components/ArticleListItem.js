import propTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import ConditionalWrapper from './ConditionalWrapper'
import Image from './Image'
import ImageCopyright from './ImageCopyright'
import Link from 'gatsby-link'
import FancyLink from './FancyLink'

import TextRenderer from './TextRenderer'

const ArticleListItem = ({
	title,
	excerpt,
	image,
	copyright,
	alt,
	tags,
	to,
	url,
	size,
	className,
	...props
}) => {
	const [active, setActive] = useState(false)
	return (
		<ConditionalWrapper
			condition={url}
			ifWrapper={children => (
				<a {...props} href={url} className="focus:outline-none">
					{children}
				</a>
			)}
			elseWrapper={children => (
				<Link to={to} {...props} className="focus:outline-none">
					{children}
				</Link>
			)}
		>
			<ArticleListItemContainer
				onMouseEnter={() => setActive()}
				onMouseLeave={() => setActive(!active)}
			>
				<ImageContainer size={size}>
					<div className="w-full h-full relative overflow-hidden">
						{image && (
							<div>
								<StyledImage
									style={{ position: 'absolute' }}
									className="h-full w-full bottom-0 top-0 left-0 z-0"
									objectFit="cover"
									objectPosition="50% 50%"
									fluid={image}
									alt={alt}
								/>
								<ImageCopyright credits={copyright} />
							</div>
						)}
					</div>
				</ImageContainer>
				<ContentContainer size={size}>
					<h2 className="text-black text-2xl md:text-3xl leading-tight font-bold mb-4">
						{title}
					</h2>
					<span className="h-1 w-6 block bg-green-500 rounded-tr rounded-br mb-4" />
					{excerpt && (
						<div className="text-base text-gray-700 mb-4">
							<TextRenderer lines={5} text={excerpt} />
						</div>
					)}
					<FancyLink external={url} active={active} title="Läs mer" />
				</ContentContainer>
			</ArticleListItemContainer>
		</ConditionalWrapper>
	)
}

const StyledImage = styled(Image)`
	transition: transform 0.5s;
`

const ArticleListItemContainer = styled.div`
	${tw`flex flex-wrap`}
	&:hover ${StyledImage} {
		transform: scale(1.025);
	}
`

const ContentContainer = styled.div`
	${({ size }) => {
		switch (size) {
			case 'large':
				return tw`w-full md:w-6/12 px-3 flex flex-col md:justify-center`
			default:
				return tw`w-7/12 md:w-8/12 px-3 `
		}
	}}
`
const ImageContainer = styled.div`
	${({ size }) => {
		switch (size) {
			case 'large':
				return tw`w-full rounded overflow-hidden md:w-6/12 px-3 mb-6 h-500px lg:h-600px`
			default:
				return tw`w-5/12 rounded overflow-hidden md:w-4/12 px-3 h-200px md:h-300px`
		}
	}}
`

ArticleListItem.propTypes = {
	title: propTypes.string.isRequired,
	excerpt: propTypes.arrayOf(propTypes.object),
	image: propTypes.object,
	to: propTypes.string,
	url: propTypes.string,
	copyright: propTypes.string,
	className: propTypes.string,
	alt: propTypes.string,
}

export default ArticleListItem
