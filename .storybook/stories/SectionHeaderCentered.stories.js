import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, object } from '@storybook/addon-knobs/react'

import SectionHeaderCentered from '../../src/components/slices/SectionHeaderCentered'

const title = [
	{
		type: 'heading2',
		text: 'Section Title',
		spans: [],
	},
]

const body = [
	{
		type: 'paragraph',
		text:
			'Visit krisinformation.se for updated information about the corona virus (covid-19).',
		spans: [{ start: 0, end: 0, type: 'strong' }],
	},
]

storiesOf('SectionHeaderCentered', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		return (
			<SectionHeaderCentered title={object('title', title)} body={body} />
		)
	})
