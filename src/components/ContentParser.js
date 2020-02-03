import React from 'react'
import propTypes from 'prop-types'

import TextContainer from './slices/TextContainer'
import ArticleHeroFullContainer from './slices/ArticleHeroFullContainer'
import ArticleHeroSplitContainer from './slices/ArticleHeroSplitContainer'
import ArticleListContainer from './slices/ArticleListContainer'
import ArticleGridContainer from './slices/ArticleGridContainer'
import ImageFullWidthContainer from './slices/ImageFullWidthContainer'

const TYPE_COMPONENTS = {
	text: TextContainer,
	article_hero_full: ArticleHeroFullContainer,
	article_hero_split: ArticleHeroSplitContainer,
	article_list: ArticleListContainer,
	article_grid: ArticleGridContainer,
	image_full_width: ImageFullWidthContainer,
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
