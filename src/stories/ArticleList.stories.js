import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, object } from '@storybook/addon-knobs/react'
import { ImageTall } from './Image'

import ArticleList from '../components/slices/ArticleList'

const articles = [
	{
		title: 'Bo som i en saga på Tjolöholms allmogeby',
		excerpt:
			'På fantastiskt läge mellan pampiga Tjolöholms slott och Kungsbackafjorden ligger Allmogebyns sex pittoreska parhus.',
		image: ImageTall,
	},
	{
		title: 'Upplev en halländsk vingård',
		excerpt:
			'Followed by a slightly longer text we would normally call a paragraph. Without this the heading wouldn’t make as much sense',
		image: ImageTall,
	},
	{
		title: 'Kom nära naturen hos Stedsans in the woods',
		excerpt:
			'Followed by a slightly longer text we would normally call a paragraph. Without this the heading wouldn’t make as much sense',
		image: ImageTall,
	},
]

storiesOf('ArticleList', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		return <ArticleList articles={object('articles', articles)} />
	})
