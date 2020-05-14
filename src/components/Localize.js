import React, { Fragment, useEffect, useState, useContext } from 'react'
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

export const useLocalize = textProp => {
	const lang = useContext(LocaleContext)
	const [text, set] = useState(textProp)

	useEffect(() => {
		if (lang !== 'sv-se') {
			set(
				translations[textProp] && translations[textProp][lang]
					? translations[textProp][lang]
					: textProp,
			)
		}
	}, [set, lang, textProp])

	return text
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
