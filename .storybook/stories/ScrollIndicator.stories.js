import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, object, array } from '@storybook/addon-knobs/react'

import ScrollIndicator from '../../src/components/ScrollIndicator'

storiesOf('ScrollIndicator', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		return <ScrollIndicator />
	})
	.add('green', () => {
		return <ScrollIndicator colorscheme={text('colorscheme', 'green')} />
	})
