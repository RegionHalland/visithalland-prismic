import React, { Fragment, useContext } from 'react'
import { LocaleContext } from '../templates/content'

const Localize = ({ text }) => {
	const lang = useContext(LocaleContext)

	if (lang === 'sv-se') {
		return <Fragment>{text}</Fragment>
	}

	return (
		<Fragment>
			{translations[text] && translations[text][lang]
				? translations[text][lang]
				: text}
		</Fragment>
	)
}

const translations = {
	Stäng: {
		no: 'Lukk',
		'da-dk': 'Luk',
	},
	'Läs mer': {
		no: 'Les mer',
		'da-dk': 'Læs mere',
	},
	'Jag förstår': {
		no: 'Jeg forstår',
		'da-dk': 'Jeg forstår',
	},
}

export default Localize
