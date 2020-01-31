import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, array } from '@storybook/addon-knobs/react'
import { ImageTall } from './Image'

import ArticleGrid from '../components/slices/ArticleGrid'

const articles = [
	{
		title: 'Bo som i en saga på Tjolöholms allmogeby',
		tags: ['Boende'],
		image: ImageTall,
	},
	{
		title: 'Upplev en halländsk vingård',
		tags: ['Boende', 'Naturnära'],
		image: ImageTall,
	},
	{
		title: 'Kom nära naturen hos Stedsans in the woods',
		tags: null,
		image: ImageTall,
	},
	{
		title: 'Kom nära naturen hos Stedsans in the woods',
		tags: null,
		image: ImageTall,
	},
	{
		title: 'Kom nära naturen hos Stedsans in the woods',
		tags: null,
		image: ImageTall,
	},
	{
		title: 'Kom nära naturen hos Stedsans in the woods',
		tags: null,
		image: ImageTall,
	},
]

storiesOf('ArticleGrid', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		return <ArticleGrid articles={array('articles', articles)} />
	})
