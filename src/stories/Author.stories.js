import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs/react'
import { ImageSquare } from './Image'

import Author from '../components/Author'

const name = 'Lisa Söderholm'
const role = 'Webbredaktör'
const phone = '+46730936515'
const email = 'lisa.soderholm@regionhalland.se'

storiesOf('Author', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		return (
			<Author
				className="text-center"
				name={text('name', name)}
				role={text('role', role)}
				phone={text('phone', phone)}
				email={text('email', email)}
				image={ImageSquare}
			/>
		)
	})
	.add('left aligned', () => {
		return (
			<Author
				className="text-left"
				name={text('name', name)}
				role={text('role', role)}
				phone={text('phone', phone)}
				email={text('email', email)}
				image={ImageSquare}
			/>
		)
	})
