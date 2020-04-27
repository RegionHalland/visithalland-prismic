import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { linkResolver } from '../../utils/linkResolver'
import styled from 'styled-components'
import Link from 'gatsby-link'
import FancyLink from '../FancyLink'
import ConditionalWrapper from '../ConditionalWrapper'
import Image from '../Image'
import ImageCopyright from '../ImageCopyright'
import TextRenderer from '../TextRenderer'
import Container from '../Container'

const FeatureSplitColor = ({
	title,
	body,
	image,
	alt,
	meta,
	tags,
	buttonLabel,
	url,
	copyright,
	...props
}) => {
	const [active, setActive] = useState(false)
	return (
		<Container className="px-4 md:px-6">
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
				<BoxContainer
					onMouseEnter={() => setActive()}
					onMouseLeave={() => setActive(!active)}
					className="flex rounded overflow-hidden flex-col md:flex-row relative"
				>
					<div className="flex flex-1 relative bg-green-200 z-10 items-center justify-center order-2 md:order-1">
						<div className="text-center p-8">
							{tags.map((tag, index) => (
								<span
									key={index}
									className="text-green-600 font-medium inline-block text-base mb-1"
								>
									{tag}
								</span>
							))}
							<h1 className="text-2xl md:text-4xl mx-auto mb-4 lg:mb-6 w-full leading-tight text-black font-bold max-w-lg">
								{title}
							</h1>
							<div className="bg-green-600 w-6 h-1 mb-4 lg:mb-6 rounded mx-auto" />
							{body && (
								<div className="text-black text-lg mb-6">
									<TextRenderer text={body}></TextRenderer>
								</div>
							)}
							<FancyLink
								active={active}
								external={url}
								title={buttonLabel ? buttonLabel : 'Läs mer'}
							/>
						</div>
					</div>
					<div className="relative h-400px md:h-500px z-10 flex-1 order-1 md:order-2">
						<Image
							className="h-full w-full bottom-0 top-0 left-0 z-0"
							objectFit="contain"
							objectPosition="50% 50%"
							fluid={image}
							alt={alt}
						/>
						<ImageCopyright credits={copyright} />
					</div>
				</BoxContainer>
			</ConditionalWrapper>
		</Container>
	)
}

const BoxContainer = styled.div``

FeatureSplitColor.propTypes = {
	title: PropTypes.string.isRequired,
	linkType: PropTypes.string.isRequired,
	buttonLabel: PropTypes.string.isRequired,
	image: PropTypes.object,
	meta: PropTypes.object.isRequired,
	url: PropTypes.string,
}

export default FeatureSplitColor
