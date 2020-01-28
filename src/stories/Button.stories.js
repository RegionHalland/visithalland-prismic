import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react'

import Button from '../components/Button'

const title = 'Button Title'
const loading = false

storiesOf('Button', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		return (
			<Button
				title={text('title', title)}
				loading={boolean(false, loading)}
			/>
		)
	})
