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

const ContentParser = ({ slices, meta, seo }) => (
	<main>
		{slices.map((slice, index) => {
			const Component = TYPE_COMPONENTS[slice.type] || null
			return Component ? (
				<div className="mb-8">
					<Component
						slice={slice}
						meta={meta}
						seo={seo}
						key={index}
					/>
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
