import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, object, array } from '@storybook/addon-knobs/react'

import Quote from '../../src/components/slices/Quote'

import placeholder from './assets/placeholder.jpg'

const image = {
	base64:
		'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAAC/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAL/2gAMAwEAAhADEAAAATvBiGokf//EABsQAAIDAAMAAAAAAAAAAAAAAAIRAAEDEyEi/9oACAEBAAEFAseptxFkKQs6O/Vkp//EABURAQEAAAAAAAAAAAAAAAAAABAS/9oACAEDAQE/AZP/xAAWEQADAAAAAAAAAAAAAAAAAAABEBL/2gAIAQIBAT8Bor//xAAcEAACAgIDAAAAAAAAAAAAAAAAEQEhEjEyYXH/2gAIAQEABj8CtLslS0cYPDFUaP/EABsQAQEBAAIDAAAAAAAAAAAAAAERACExgaHR/9oACAEBAAE/IWgT7GQgroDvocqVhyxiigvnUQE3/9oADAMBAAIAAwAAABCYL//EABYRAAMAAAAAAAAAAAAAAAAAABARMf/aAAgBAwEBPxBKP//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAgEBPxAwRsb/xAAdEAEBAAICAwEAAAAAAAAAAAABEQAhQYFRYZGx/9oACAEBAAE/EJFBABI5n1cOi1Q1dXi4pyPFb7xSDRgWvvHwARZfLX5glpGhjO3P/9k=',
	aspectRatio: 1.5,
	src: placeholder,
	srcSet: placeholder,
	sizes: '(max-width: 960px) 100vw, 960px',
}

const meta = {
	lang: 'sv-se',
	type: 'content',
	uid: 'det-basta-med-halland-ar-mojligheten-att-hitta-sma',
}

storiesOf('Quote', module)
	.addDecorator(withKnobs)
	.add('link', () => {
		return (
			<Quote
				quote={text(
					'quote',
					'Jag hade aldrig hört talas om Halland innan, nu älskar jag det.',
				)}
				byline={text('byline', 'Jonas Svensson')}
				image={image}
				copyright={text('copyright', 'Lisa Söderholm')}
				alt={text('alt', 'Bild på kvinna vid klippa')}
				buttonLabel={text('buttonLabel', 'Läs om Jonas semester')}
				meta={meta}
			/>
		)
	})
	.add('url', () => {
		return (
			<Quote
				quote={text(
					'quote',
					'Jag hade aldrig hört talas om Halland innan, nu älskar jag det.',
				)}
				byline={text('byline', 'Jonas Svensson')}
				image={image}
				copyright={text('copyright', 'Lisa Söderholm')}
				alt={text('alt', 'Bild på kvinna vid klippa')}
				buttonLabel={text('buttonLabel', 'Läs om Jonas semester')}
				url={text('url', 'https://www.aftonbladet.se')}
			/>
		)
	})
