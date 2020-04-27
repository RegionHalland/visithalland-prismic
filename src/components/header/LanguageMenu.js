import React from 'react'
import PropTypes from 'prop-types'
import NavItem from './NavItem'
import { navigate } from 'gatsby'
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
					<NavItem
						title={TITLES[item]}
						active={item === meta.lang}
						onClick={() => navigate(linkResolver(altPage))}
					/>
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
