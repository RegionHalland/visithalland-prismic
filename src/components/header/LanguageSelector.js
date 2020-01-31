import PropTypes from 'prop-types'
import React from 'react'

import Link from 'gatsby-link'

const LanguageSelector = ({ langs }) => (
	<div className="h-full flex items-center">
		{langs.map(lang => (
			<Link
				key={lang.substring(0, 2)}
				className="font-semibold text-black h-full flex items-center font-sans px-2 md:px-3"
				to={lang === 'sv-se' ? '/' : lang.substring(0, 2)}
			>
				{lang.substring(0, 2)}
			</Link>
		))}
	</div>
)

LanguageSelector.propTypes = {
	langs: PropTypes.array,
}

export default LanguageSelector
