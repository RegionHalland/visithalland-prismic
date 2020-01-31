import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react'

import { RichText } from './RichText'

import Text from '../components/slices/Text'

const title = 'Gå till artikel'

storiesOf('Text', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		return <Text text={RichText} />
	})
