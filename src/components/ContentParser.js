import React from 'react'
import propTypes from 'prop-types'

import ArticleHeroContainer from './slices/ArticleHeroContainer'
import FeaturedArticleContainer from './slices/FeaturedArticleContainer'
import ArticleCarouselContainer from './slices/ArticleCarouselContainer'
import ImageFullWidthContainer from './slices/ImageFullWidthContainer'

const TYPE_COMPONENTS = {
	article_hero: ArticleHeroContainer,
	featured_article: FeaturedArticleContainer,
	article_carousel: ArticleCarouselContainer,
	full_width_image: ImageFullWidthContainer,
}

const ContentParser = ({ slices, meta, seo }) => (
	<main>
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
	slices: propTypes.arrayOf(propTypes.object).isRequired,
	meta: propTypes.object,
	seo: propTypes.object,
}

export default ContentParser
