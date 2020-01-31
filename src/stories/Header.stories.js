import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'

import Header from '../components/header/Header'

const langs = [
	{ label: 'Sv', lang: 'sv-se' },
	{ label: 'Dk', lang: 'da-dk' },
	{ label: 'No', lang: 'no' },
]

const supportLinks = [
	{ label: 'Cookies', slug: '/cookies' },
	{ label: 'Om oss', slug: '/om-oss' },
	{ label: 'Kontakt', slug: '/kontakt' },
]
const links = [
	{ label: 'Höst i Halland', slug: '/host-i-halland' },
	{ label: 'Tips & Guider', slug: '/tips-guider' },
	{ label: 'Skördetid i Halland', slug: '/skordetid-i-halland' },
]

storiesOf('Header', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		return (
			<Header langs={langs} supportLinks={supportLinks} links={links} />
		)
	})
