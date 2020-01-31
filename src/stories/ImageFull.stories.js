import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, date } from '@storybook/addon-knobs/react'

import { ImageSquare } from './Image'

import ImageFull from '../components/slices/ImageFull'

storiesOf('ImageFull', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		return <ImageFull image={ImageSquare} />
	})
