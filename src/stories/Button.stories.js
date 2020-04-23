import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, object } from '@storybook/addon-knobs/react'

import Button from '../components/Button'

storiesOf('Button', module)
	.addDecorator(withKnobs)
	.add('url', () => {
		return (
			<Button
				url="www.aftonbladet.se"
				title={text('title', 'Gå till artikel')}
			/>
		)
	})
	.add('button', () => {
		return (
			<Button
				onClick={() => alert('Clicked it')}
				title={text('title', 'Gå till artikel')}
			/>
		)
	})
	.add('Link', () => {
		return <Button to="/" title={text('title', 'Gå till artikel')} />
	})
	.add('green', () => {
		return (
			<Button
				colorscheme="green"
				to="/"
				title={text('title', 'Gå till artikel')}
			/>
		)
	})
