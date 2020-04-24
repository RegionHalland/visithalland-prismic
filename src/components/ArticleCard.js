import propTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import Image from './Image'
import ImageCopyright from './ImageCopyright'
import ConditionalWrapper from './ConditionalWrapper'
import Link from 'gatsby-link'

import FancyLink from './FancyLink'

const ArticleCardSmall = ({
	title,
	image,
	copyright,
	alt,
	tags,
	to,
	url,
	className,
	...props
}) => {
	const [active, setActive] = useState()
	return (
		<ConditionalWrapper
			condition={url}
			ifWrapper={children => (
				<a {...props} href={url}>
					{children}
				</a>
			)}
			elseWrapper={children => (
				<Link to={to} {...props}>
					{children}
				</Link>
			)}
		>
			<ArticleCardContainer
				onMouseEnter={() => setActive()}
				onMouseEnter={() => setActive(!active)}
				className={className}
			>
				<div className="absolute bottom-0 left-0 right-0 h-full w-full flex items-center flex-col justify-center text-center p-3 z-10">
					<div>
						{tags.map((tag, index) => (
							<span
								key={index}
								className="text-gray-200 font-medium inline-block mr-2 text-base mb-2"
							>
								{tag}
							</span>
						))}
					</div>
					<h2 className="text-white font-bold mb-2 leading-tight">
						{title}
					</h2>
					<FancyLink
						colorscheme="white"
						active={active}
						title="Läs mer"
					/>
				</div>
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
			</ArticleCardContainer>
		</ConditionalWrapper>
	)
}

const StyledImage = styled(Image)`
	transition: transform 0.75s;
`

const ArticleCardContainer = styled.div`
	${tw`block relative px-3 md:px-4 pb-4 overflow-hidden min-h-300px w-full outline-none`}

	&:after {
		content: '';
		${tw`bg-black h-full w-full absolute top-0 left-0`}
		opacity:0.1;
	}

	&:hover {
		${StyledImage} {
			transform: scale(1.05);
		}
	}
`

ArticleCardSmall.propTypes = {
	to: propTypes.string,
	url: propTypes.string,
	tags: propTypes.array,
	copyright: propTypes.string,
	title: propTypes.string.isRequired,
	className: propTypes.string,
	image: propTypes.object,
}

export default ArticleCardSmall
