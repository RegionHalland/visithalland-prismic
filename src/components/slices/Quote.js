import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Link from 'gatsby-link'
import { linkResolver } from '../../utils/linkResolver'

import Image from '../Image'
import ConditionalWrapper from '../ConditionalWrapper'
import ImageCopyright from '../ImageCopyright'
import FancyLink from '../FancyLink'
import Container from '../Container'

const Quote = ({
	quote,
	byline,
	image,
	copyright,
	alt,
	meta,
	buttonLabel,
	url,
	...props
}) => {
	const [active, setActive] = useState(false)
	console.log(meta)
	return (
		<Container className="px-4 lg:px-6 flex flex-wrap items-center">
			<div className="w-full h-500px md:h-500px md:w-6/12 px-3 overflow-hidden relative">
				<Image
					style={{ position: 'absolute' }}
					className="h-full w-full bottom-0 top-0 left-0 z-0"
					objectFit="cover"
					objectPosition="50% 50%"
					fluid={image}
					alt={alt}
				/>
				<ImageCopyright credits={copyright} />
			</div>

			<QuoteContainer
				className="w-11/12 mx-auto md:w-6/12 -mt-8 md:mt-0 md:-ml-16 relative"
				onMouseEnter={() => setActive()}
				onMouseLeave={() => setActive(!active)}
			>
				<ConditionalWrapper
					condition={url}
					ifWrapper={children => (
						<a {...props} href={url} className="focus:outline-none">
							{children}
						</a>
					)}
					elseWrapper={children => (
						<Link
							to={linkResolver(meta)}
							{...props}
							className="focus:outline-none"
						>
							{children}
						</Link>
					)}
				>
					<div className="p-6 bg-white relative z-20">
						<blockquote className="text-2xl md:text-3xl mx-auto w-full mb-6 text-black font-bold">
							“{quote}”
						</blockquote>
						<span className="block mb-6 text-base text-gray-600">
							- {byline}
						</span>
						<FancyLink
							active={active}
							external={url}
							title={buttonLabel ? buttonLabel : 'Läs mer'}
						/>
					</div>
				</ConditionalWrapper>
			</QuoteContainer>
		</Container>
	)
}

const QuoteContainer = styled.div`
	&:before {
		content: '';
		${tw`absolute top-0 left-0 h-full w-full mt-2 ml-2 z-10 bg-green-600`};
	}
`

Quote.propTypes = {
	quote: PropTypes.string.isRequired,
	byline: PropTypes.string,
	buttonLabel: PropTypes.string.isRequired,
	image: PropTypes.object,
	meta: PropTypes.object,
	url: PropTypes.string,
}

export default Quote
