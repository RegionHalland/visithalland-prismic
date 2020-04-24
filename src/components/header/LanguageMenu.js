import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { linkResolver } from '../../utils/linkResolver'

const TITLES = {
	'sv-se': 'Sv',
	'da-dk': 'Dk',
	no: 'No',
}

const LanguageMenu = ({ languages, meta }) => (
	<ul className="flex lg:pl-8 pr-4 lg:pr-0 py-4 lg:py-0 order-2 lg:order-3">
		{languages.map(item => {
			let altPage = meta.alternateLanguages.find(el => el.lang === item)
			if (!altPage) {
				altPage = meta.lang === item ? meta : { item }
			}

			return (
				<li key={item}>
					<Link
						className="ml-4 font-bold text-white hover:text-gray-300"
						to={linkResolver(altPage)}
					>
						{TITLES[item]}
					</Link>
				</li>
			)
		})}
	</ul>
)

LanguageMenu.propTypes = {
	languages: PropTypes.arrayOf(PropTypes.string).isRequired,
	meta: PropTypes.object.isRequired,
}

export default LanguageMenu
