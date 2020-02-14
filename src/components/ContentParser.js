import React from 'react'
import PropTypes from 'prop-types'

import ArticleHeroContainer from './slices/ArticleHeroContainer'
import FeaturedArticleContainer from './slices/FeaturedArticleContainer'
import ArticleCarouselContainer from './slices/ArticleCarouselContainer'
import ImageFullWidthContainer from './slices/ImageFullWidthContainer'
import TextContainer from './slices/TextContainer'
import ArticleListContainer from './slices/ArticleListContainer'
import ArticleGridContainer from './slices/ArticleGridContainer'

const TYPE_COMPONENTS = {
	article_hero: ArticleHeroContainer,
	featured_article: FeaturedArticleContainer,
	article_carousel: ArticleCarouselContainer,
	article_grid: ArticleGridContainer,
	full_width_image: ImageFullWidthContainer,
	text: TextContainer,
	article_list: ArticleListContainer,
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
	slices: PropTypes.arrayOf(PropTypes.object).isRequired,
	meta: PropTypes.object,
	seo: PropTypes.object,
}

export default ContentParser
