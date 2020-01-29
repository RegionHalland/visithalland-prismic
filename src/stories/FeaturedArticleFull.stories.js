import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, date } from '@storybook/addon-knobs/react'

import { ImageSquare } from './Image'

import FeaturedArticleFull from '../components/slices/FeaturedArticleFull'

const title = 'På höstlov i Halland'

storiesOf('FeaturedArticleFull', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		return (
			<FeaturedArticleFull
				title={text('title', title)}
				image={ImageSquare}
			/>
		)
	})
