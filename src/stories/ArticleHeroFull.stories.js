import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, date } from '@storybook/addon-knobs/react'

import { ImageTall, ImageSquare } from './Image'

import ArticleHeroFull from '../components/slices/ArticleHeroFull'

const title = 'På höstlov i Halland'
const introduction =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget nisl et justo dictum semper in ac sem. Phasellus vel maximus tortor. In malesuada quam eget nisl aliquam hendrerit. Nam a lectus suscipit tortor imperdiet commodo. Aliquam vulputate, lectus ac ornare dictum, velit sem placerat es.'
const publication_date = new Date('2020-01-27T11:42:21+0000')
const author = {
	name: 'Lisa Söderholm',
	role: 'Webbredaktör',
	image: ImageSquare,
	email: 'lisa.soderholm@regionhalland.se',
	phone: '+46730393913',
	className: 'text-white',
}

storiesOf('ArticleHeroFull', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		return (
			<ArticleHeroFull
				title={text('title', title)}
				introduction={text('introduction', introduction)}
				publication_date={date('publication_date', publication_date)}
				image={ImageTall}
				author={author}
			/>
		)
	})
