import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { linkResolver } from '../../utils/linkResolver'
import Image from '../Image'
import ImageCopyright from '../ImageCopyright'
import Button from '../Button'
import TextRenderer from '../TextRenderer'
import Container from '../Container'

const FeatureSplitShadow = ({
	title,
	body,
	image,
	alt,
	meta,
	buttonLabel,
	url,
	copyright,
}) => (
	<Container className="px-4 md:px-6">
		<BoxShadow className="flex flex-col md:flex-row">
			<div className="flex flex-1 items-center justify-center order-2 md:order-1">
				<div className="text-center p-8">
					{meta.tags.length > 0 && (
						<div>
							{meta.tags.map((tag, index) => (
								<span className="text-gray-500" key={tag}>
									{tag}
									{!!(index < meta.tags.length - 1) && (
										<span>, </span>
									)}
								</span>
							))}
						</div>
					)}
					<h1 className="text-2xl md:text-4xl mx-auto mb-4 w-full leading-tight text-black font-semibold max-w-lg">
						{title}
					</h1>
					{body && (
						<div className="text-black mb-4">
							<TextRenderer text={body}></TextRenderer>
						</div>
					)}
					<Button
						className="mt-2"
						title={buttonLabel}
						to={linkResolver(meta)}
						url={url}
					/>
				</div>
			</div>
			<div className="relative flex-1 order-1 md:order-2">
				<Image
					className="h-full w-full bottom-0 top-0 left-0 z-0"
					objectFit="contain"
					objectPosition="50% 50%"
					fluid={image}
					alt={alt}
				/>
				<ImageCopyright credits={copyright} />
			</div>
		</BoxShadow>
	</Container>
)

const BoxShadow = styled.div`
	box-shadow: 10px 10px 0 0 #85a197;
`

FeatureSplitShadow.propTypes = {
	title: PropTypes.string.isRequired,
	linkType: PropTypes.string.isRequired,
	buttonLabel: PropTypes.string.isRequired,
	image: PropTypes.object,
	meta: PropTypes.object.isRequired,
	url: PropTypes.string,
}

export default FeatureSplitShadow
