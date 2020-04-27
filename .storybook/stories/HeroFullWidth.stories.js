import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, object, array } from '@storybook/addon-knobs/react'

import HeroFullWidth from '../../src/components/slices/HeroFullWidth'
import PlaceholderImage from './assets/placeholder.jpg'

const Placeholder = {
	base64:
		'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAAC/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAL/2gAMAwEAAhADEAAAATvBiGokf//EABsQAAIDAAMAAAAAAAAAAAAAAAIRAAEDEyEi/9oACAEBAAEFAseptxFkKQs6O/Vkp//EABURAQEAAAAAAAAAAAAAAAAAABAS/9oACAEDAQE/AZP/xAAWEQADAAAAAAAAAAAAAAAAAAABEBL/2gAIAQIBAT8Bor//xAAcEAACAgIDAAAAAAAAAAAAAAAAEQEhEjEyYXH/2gAIAQEABj8CtLslS0cYPDFUaP/EABsQAQEBAAIDAAAAAAAAAAAAAAERACExgaHR/9oACAEBAAE/IWgT7GQgroDvocqVhyxiigvnUQE3/9oADAMBAAIAAwAAABCYL//EABYRAAMAAAAAAAAAAAAAAAAAABARMf/aAAgBAwEBPxBKP//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAgEBPxAwRsb/xAAdEAEBAAICAwEAAAAAAAAAAAABEQAhQYFRYZGx/9oACAEBAAE/EJFBABI5n1cOi1Q1dXi4pyPFb7xSDRgWvvHwARZfLX5glpGhjO3P/9k=',
	aspectRatio: 1.5,
	src: PlaceholderImage,
	srcSet: PlaceholderImage,
	sizes: '(max-width: 960px) 100vw, 960px',
}

const TextObject = [
	{
		type: 'paragraph',
		text:
			'Att leta upp det perfekta picknick-stället är ett spännande vardagsäventyr för både stora och små. Snöra på dig skorna och packa ner termos och ett par bullar och ge dig ut i naturen. Vi har guiden till några av Hallands vackraste vyer.',
		spans: [{ start: 0, end: 99, type: 'strong' }],
	},
]

const AuthorPlaceholder = {
	name: 'Lisa Söderholm',
	role: 'Webbredaktör',
	image: Placeholder,
}

storiesOf('HeroFullWidth', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		return (
			<HeroFullWidth
				title={text('title', 'Naturupplevelser i Halland')}
				introduction={object('introduction', TextObject)}
				author={AuthorPlaceholder}
				image={Placeholder}
				alt={text('alt', 'Beskrivning av bild')}
				copyright={text('copyright', 'Anders Alm')}
			/>
		)
	})
