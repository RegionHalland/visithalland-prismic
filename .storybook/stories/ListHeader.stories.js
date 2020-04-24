import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs/react'

import ListHeader from '../../src/components/ListHeader'

storiesOf('ListHeader', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		return <ListHeader title={text('title', 'Natur och friluftsliv')} />
	})
	.add('white', () => {
		return (
			<ListHeader
				title={text('title', 'Fler spännande resmål')}
				colorscheme={text('colorscheme', 'white')}
			/>
		)
	})
