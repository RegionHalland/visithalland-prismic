import React from 'react'
import PropTypes from 'prop-types'
import { linkResolver } from '../../utils/linkResolver'
import Image from '../Image'
import ImageCopyright from '../ImageCopyright'
import Button from '../Button'
import TextRenderer from '../TextRenderer'

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
	<div className="flex">
		<div className="flex-1 bg-coral-500">
			<h1 className="text-2xl md:text-4xl mx-auto mb-6 w-full leading-tight text-white font-semibold">
				{title}
			</h1>
			<TextRenderer text={body}></TextRenderer>
			<Button title={buttonLabel} to={linkResolver(meta)} url={url} />
		</div>
		<div className="flex-1 relative">
			<Image
				className="h-full w-full bottom-0 top-0 left-0 z-0"
				objectFit="cover"
				objectPosition="50% 50%"
				fluid={image}
				alt={alt}
			/>
			<ImageCopyright credits={copyright} />
		</div>
	</div>
)

FeatureSplitShadow.propTypes = {
	title: PropTypes.string.isRequired,
	linkType: PropTypes.string.isRequired,
	buttonLabel: PropTypes.string.isRequired,
	image: PropTypes.object,
	meta: PropTypes.object.isRequired,
	url: PropTypes.string,
}

export default FeatureSplitShadow
