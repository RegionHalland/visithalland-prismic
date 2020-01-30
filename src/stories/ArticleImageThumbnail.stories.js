import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, array } from '@storybook/addon-knobs/react'

import { ImageTall } from './Image'

import ArticleImageThumbnail from '../components/ArticleImageThumbnail'

const title = 'På höstlov i Halland'
const tags = ['Semester', 'Familjevänligt']

storiesOf('ArticleImageThumbnail', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		return (
			<ArticleImageThumbnail
				title={text('title', title)}
				tags={array('tags', tags)}
				image={ImageTall}
				to="/example"
			/>
		)
	})
