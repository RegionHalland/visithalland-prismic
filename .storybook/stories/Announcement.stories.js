import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, object, array } from '@storybook/addon-knobs/react'

import Announcement from '../../src/components/Announcement'

const body = [
	{
		type: 'paragraph',
		text:
			'Visit krisinformation.se for updated information about the corona virus (covid-19).',
		spans: [{ start: 0, end: 0, type: 'strong' }],
	},
]

storiesOf('Announcement', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		return (
			<Announcement
				key={1}
				id={1}
				content={body}
				onClose={() => alert('I was clicked')}
			/>
		)
	})
