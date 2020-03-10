import React from 'react'
import PropTypes from 'prop-types'

import HeroContainer from './slices/HeroContainer'
import FeatureContainer from './slices/FeatureContainer'
import ImageContainer from './slices/ImageContainer'
import TextContainer from './slices/TextContainer'
import CollectionContainer from './slices/CollectionContainer'
import EmbedContainer from './slices/EmbedContainer'
import QuoteContainer from './slices/QuoteContainer'

const TYPE_COMPONENTS = {
	hero: HeroContainer,
	image: ImageContainer,
	feature: FeatureContainer,
	collection: CollectionContainer,
	text: TextContainer,
	embed: EmbedContainer,
	quote: QuoteContainer,
}

const ContentParser = ({ slices, meta, seo }) => (
	<main className="overflow-hidden">
		{slices.map((slice, index) => {
			const Component = TYPE_COMPONENTS[slice.type] || null
			return Component ? (
				<div className="mb-8" key={index}>
					<Component slice={slice} meta={meta} seo={seo} />
				</div>
			) : null
		})}
	</main>
)

ContentParser.propTypes = {
	slices: PropTypes.arrayOf(PropTypes.object).isRequired,
	meta: PropTypes.object,
	seo: PropTypes.object,
}

export default ContentParser
