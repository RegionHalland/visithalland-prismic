import React from 'react'
import PropTypes from 'prop-types'

import HeroContainer from './slices/HeroContainer'
import HeroCarouselContainer from './slices/HeroCarouselContainer'
import FeaturedArticleContainer from './slices/FeaturedArticleContainer'
import ArticleCarouselContainer from './slices/ArticleCarouselContainer'
import ImageFullWidthContainer from './slices/ImageFullWidthContainer'
import TextContainer from './slices/TextContainer'
import ArticleListContainer from './slices/ArticleListContainer'
import ArticleGridContainer from './slices/ArticleGridContainer'
import InfoBoxContainer from './slices/InfoBoxContainer'

const TYPE_COMPONENTS = {
	article_list: ArticleListContainer,
	hero: HeroContainer,
	hero_carousel: HeroCarouselContainer,
	article_carousel: ArticleCarouselContainer,
	article_grid: ArticleGridContainer,
	featured_article: FeaturedArticleContainer,
	full_width_image: ImageFullWidthContainer,
	info_box: InfoBoxContainer,
	text: TextContainer,
}

const ContentParser = ({ slices, meta, seo }) => (
	<main>
		{slices.map((slice, index) => {
			const Component = TYPE_COMPONENTS[slice.type] || null
			console.log(slice.type)
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
