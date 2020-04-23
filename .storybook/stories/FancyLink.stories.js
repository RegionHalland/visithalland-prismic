import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react'

import FancyLink from '../../src/components/FancyLink'

storiesOf('FancyLink', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		return (
			<FancyLink
				active={boolean('active', true)}
				onClick={() => console.log('Clicked it')}
				title={text('title', 'Gå till artikel')}
			/>
		)
	})
	.add('white', () => {
		return (
			<FancyLink
				colorscheme={text('colorscheme', 'white')}
				active={boolean('active', true)}
				onClick={() => console.log('Clicked it')}
				title={text('title', 'Gå till artikel')}
			/>
		)
	})
