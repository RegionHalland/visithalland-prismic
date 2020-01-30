import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react'

import ButtonLink from '../components/ButtonLink'

const title = 'Gå till artikel'
const to = '/startsida'

storiesOf('ButtonLink', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		return (
			<ButtonLink title={text('title', title)} to={boolean('to', to)} />
		)
	})
