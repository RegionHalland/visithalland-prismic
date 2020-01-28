import React from 'react'

import TestContainer from './slices/TestContainer'

const SliceParser = ({ slices }) => (
	<main>
		{slices.map((slice, index) => {
			switch (slice.type) {
				case 'test':
					return <TestContainer slice={slice} key={index} />
				default:
					return null
			}
		})}
	</main>
)

export default SliceParser
