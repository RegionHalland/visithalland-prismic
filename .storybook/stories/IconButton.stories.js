import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, object } from '@storybook/addon-knobs/react'

import ArrowRightIcon from '../../src/components/icons/ArrowRightIcon'
import IconButton from '../../src/components/IconButton'

storiesOf('IconButton', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		return (
			<IconButton
				icon={<ArrowRightIcon className="h-3 w-3 text-green-200" />}
				onClick={() => alert('I was clicked')}
				colorscheme={text('colorscheme', 'green')}
			/>
		)
	})
