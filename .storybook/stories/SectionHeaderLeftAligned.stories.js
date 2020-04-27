import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, object } from '@storybook/addon-knobs/react'

import SectionHeaderLeftAligned from '../../src/components/slices/SectionHeaderLeftAligned'

const TitleObject = [
	{
		type: 'heading2',
		text: 'Section Title',
		spans: [],
	},
]

const TextObject = [
	{
		type: 'paragraph',
		text:
			'Visit krisinformation.se for updated information about the corona virus (covid-19).',
		spans: [{ start: 0, end: 0, type: 'strong' }],
	},
]

storiesOf('SectionHeaderLeftAligned', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		return (
			<SectionHeaderLeftAligned
				title={object('title', TitleObject)}
				body={TextObject}
			/>
		)
	})
