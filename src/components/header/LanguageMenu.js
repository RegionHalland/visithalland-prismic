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
	<ul className="flex md:pl-4 lg:pl-8">
		{languages.map(item => (
			<li key={item}>
				<Link
					className="ml-4 font-bold text-white hover:text-gray-300"
					to={linkResolver(meta)}
				>
					{TITLES[item]}
				</Link>
			</li>
		))}
	</ul>
)

LanguageMenu.propTypes = {
	languages: PropTypes.arrayOf(PropTypes.string).isRequired,
	meta: PropTypes.object.isRequired,
}

export default LanguageMenu
