import React from 'react'

import TextContainer from './slices/TextContainer'

const TYPE_COMPONENTS = {
	text: TextContainer,
}

const SliceParser = ({ slices }) => (
	<main>
		{slices.map((slice, index) => {
			const Component = TYPE_COMPONENTS[slice.type] || null
			return Component ? <Component slice={slice} key={index} /> : null
		})}
	</main>
)

export default SliceParser
