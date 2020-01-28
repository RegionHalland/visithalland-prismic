import React from 'react'

import Author from './slices/Author'
import HeroImageWithText from './slices/HeroImageWithText'

const SliceParser = ({ slices }) => (
	<main>
		{slices.map((slice, index) => {
			switch (slice.type) {
				case 'author':
					return <Author slice={slice} key={index} />
				case 'hero_image_with_text':
					return <HeroImageWithText slice={slice} key={index} />
				default:
					return null
			}
		})}
	</main>
)

export default SliceParser
