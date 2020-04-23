import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, object } from '@storybook/addon-knobs/react'

import Author from '../../src/components/Author'
import PlaceholderImage from './assets/placeholder.jpg'

const Placeholder = {
	base64:
		'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAAC/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAL/2gAMAwEAAhADEAAAATvBiGokf//EABsQAAIDAAMAAAAAAAAAAAAAAAIRAAEDEyEi/9oACAEBAAEFAseptxFkKQs6O/Vkp//EABURAQEAAAAAAAAAAAAAAAAAABAS/9oACAEDAQE/AZP/xAAWEQADAAAAAAAAAAAAAAAAAAABEBL/2gAIAQIBAT8Bor//xAAcEAACAgIDAAAAAAAAAAAAAAAAEQEhEjEyYXH/2gAIAQEABj8CtLslS0cYPDFUaP/EABsQAQEBAAIDAAAAAAAAAAAAAAERACExgaHR/9oACAEBAAE/IWgT7GQgroDvocqVhyxiigvnUQE3/9oADAMBAAIAAwAAABCYL//EABYRAAMAAAAAAAAAAAAAAAAAABARMf/aAAgBAwEBPxBKP//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAgEBPxAwRsb/xAAdEAEBAAICAwEAAAAAAAAAAAABEQAhQYFRYZGx/9oACAEBAAE/EJFBABI5n1cOi1Q1dXi4pyPFb7xSDRgWvvHwARZfLX5glpGhjO3P/9k=',
	aspectRatio: 1.5,
	src: PlaceholderImage,
	srcSet: PlaceholderImage,
	sizes: '(max-width: 960px) 100vw, 960px',
}

storiesOf('Author', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		return (
			<Author
				name={text('name', 'Lisa Söderholm')}
				role={text('role', 'Webbredaktör')}
				image={object('image', Placeholder)}
			/>
		)
	})
	.add('light', () => {
		return (
			<Author
				colorscheme={text('colorscheme', 'white')}
				name={text('name', 'Lisa Söderholm')}
				role={text('role', 'Webbredaktör')}
				image={object('image', Placeholder)}
			/>
		)
	})
