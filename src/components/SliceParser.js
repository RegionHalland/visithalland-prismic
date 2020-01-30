import React from 'react'

import TextContainer from './slices/TextContainer'
import ArticleHeroFullContainer from './slices/ArticleHeroFullContainer'

const TYPE_COMPONENTS = {
	text: TextContainer,
	article_hero_full: ArticleHeroFullContainer,
}

const SliceParser = ({ slices, meta }) => (
	<main>
		{slices.map((slice, index) => {
			const Component = TYPE_COMPONENTS[slice.type] || null
			return Component ? (
				<Component slice={slice} meta={meta} key={index} />
			) : null
		})}
	</main>
)

export default SliceParser
