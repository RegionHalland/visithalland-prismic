import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, object, array } from '@storybook/addon-knobs/react'

import ArticleCard from '../../src/components/ArticleCard'
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

storiesOf('ArticleCard', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		return (
			<ArticleCard
				title={text('title', 'Skördetid i Halland')}
				image={Placeholder}
				copyright={text('copyright', 'David Öhlin')}
				alt={text('alt', 'En fin bild')}
				tags={array('tags', ['Natur och Friluftsliv'])}
				to={text('to', '/')}
				className="text-4xl h-500px"
			/>
		)
	})

	.add('external', () => {
		return (
			<ArticleCard
				title={text('title', 'Skördetid i Halland')}
				image={Placeholder}
				copyright={text('copyright', 'David Öhlin')}
				alt={text('alt', 'En fin bild')}
				tags={array('tags', ['Natur och Friluftsliv'])}
				url={text('url', 'www.aftonbladet.se')}
				className="text-4xl h-500px"
			/>
		)
	})
	.add('rounded', () => {
		return (
			<ArticleCard
				title={text('title', 'Skördetid i Halland')}
				image={Placeholder}
				copyright={text('copyright', 'David Öhlin')}
				alt={text('alt', 'En fin bild')}
				tags={array('tags', ['Natur och Friluftsliv'])}
				to={text('to', '/')}
				className="text-4xl h-500px md:h-600px rounded"
			/>
		)
	})
	.add('full', () => {
		return (
			<ArticleCard
				title={text('title', 'Skördetid i Halland')}
				image={Placeholder}
				copyright={text('copyright', 'David Öhlin')}
				alt={text('alt', 'En fin bild')}
				tags={array('tags', ['Natur och Friluftsliv'])}
				to={text('to', '/')}
				className="text-3xl md:text-5xl h-600px md:h-900px"
			/>
		)
	})
	.add('with excerpt', () => {
		return (
			<ArticleCard
				title={text('title', 'Skördetid i Halland')}
				image={Placeholder}
				excerpt={TextObject}
				copyright={text('copyright', 'David Öhlin')}
				alt={text('alt', 'En fin bild')}
				tags={array('tags', ['Natur och Friluftsliv'])}
				to={text('to', '/')}
				className="text-3xl md:text-5xl h-600px md:h-900px"
			/>
		)
	})
