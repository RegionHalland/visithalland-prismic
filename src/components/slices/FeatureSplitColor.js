import React from 'react'
import PropTypes from 'prop-types'
import { linkResolver } from '../../utils/linkResolver'
import Image from '../Image'
import ImageCopyright from '../ImageCopyright'
import Button from '../Button'
import TextRenderer from '../TextRenderer'
import Container from '../Container'

const FeatureSplitColor = ({
	title,
	body,
	image,
	alt,
	meta,
	buttonLabel,
	url,
	copyright,
}) => {
	meta.tags = ['Cykelsemester', 'Piss']

	return (
		<Container>
			<div className="flex ">
				<div className="flex flex-1 items-center justify-center bg-green-600 px-8 py-8">
					<div className="text-center">
						{meta.tags.length && (
							<div>
								{meta.tags.map((tag, index) => (
									<span className="text-white" key={tag}>
										{tag}
										{!!(index < meta.tags.length - 1) && (
											<span>, </span>
										)}
									</span>
								))}
							</div>
						)}
						<h1 className="text-2xl md:text-4xl mx-auto mb-6 w-full leading-tight text-white font-semibold max-w-lg">
							{title}
						</h1>
						<Button
							title={buttonLabel}
							to={linkResolver(meta)}
							url={url}
						/>
					</div>
				</div>
				<div className="relative flex-1">
					<Image
						className="h-full w-full bottom-0 top-0 left-0 z-0"
						objectFit="contain"
						objectPosition="50% 50%"
						fluid={image}
						alt={alt}
					/>
					<ImageCopyright credits={copyright} />
				</div>
			</div>
		</Container>
	)
}

FeatureSplitColor.propTypes = {
	title: PropTypes.string.isRequired,
	linkType: PropTypes.string.isRequired,
	buttonLabel: PropTypes.string.isRequired,
	image: PropTypes.object,
	meta: PropTypes.object.isRequired,
	url: PropTypes.string,
}

export default FeatureSplitColor
