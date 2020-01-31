import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, date } from '@storybook/addon-knobs/react'

import { ImageSquare } from './Image'

import ImageFull from '../components/slices/ImageFull'

const caption = 'This is a photograph of something.'

storiesOf('ImageFull', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		return <ImageFull image={ImageSquare} caption={caption} />
	})
