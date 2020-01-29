import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs/react'

import { ImageTall } from './Image'

import ArticleListItem from '../components/ArticleListItem'

const title = 'På höstlov i Halland'
const excerpt =
	'På fantastiskt läge mellan pampiga Tjolöholms slott och Kungsbackafjorden ligger Allmogebyns sex pittoreska parhus. '

storiesOf('ArticleListItem', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		return (
			<ArticleListItem
				title={text('title', title)}
				excerpt={text('excerpt', excerpt)}
				image={ImageTall}
				to="/example"
			/>
		)
	})
