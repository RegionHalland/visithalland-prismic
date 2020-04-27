import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, object } from '@storybook/addon-knobs/react'

import SectionHeaderLine from '../../src/components/slices/SectionHeaderLine'

const TitleObject = [
	{
		type: 'heading2',
		text: 'Section Title',
		spans: [],
	},
]

storiesOf('SectionHeaderLine', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		return <SectionHeaderLine title={object('title', TitleObject)} />
	})
