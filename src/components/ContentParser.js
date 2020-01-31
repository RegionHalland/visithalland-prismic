import React from 'react'
import propTypes from 'prop-types'

import TextContainer from './slices/TextContainer'
import ArticleHeroFullContainer from './slices/ArticleHeroFullContainer'
import ArticleHeroSplitContainer from './slices/ArticleHeroSplitContainer'
import ArticleListContainer from './slices/ArticleListContainer'

const TYPE_COMPONENTS = {
	text: TextContainer,
	article_hero_full: ArticleHeroFullContainer,
	article_hero_split: ArticleHeroSplitContainer,
	article_list: ArticleListContainer,
}

const ContentParser = ({ slices, meta }) => (
	<main>
		{slices.map((slice, index) => {
			const Component = TYPE_COMPONENTS[slice.type] || null
			return Component ? (
				<Component slice={slice} meta={meta} key={index} />
			) : null
		})}
	</main>
)

ContentParser.propTypes = {
	slices: propTypes.object.isRequired,
	meta: propTypes.object,
	seo: propTypes.object,
}

export default ContentParser
