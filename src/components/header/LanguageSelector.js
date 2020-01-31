import PropTypes from 'prop-types'
import React from 'react'

import Link from 'gatsby-link'

const LanguageSelector = ({ langs }) => (
	<div className="h-full flex items-center">
		{langs.map((lang, index) => (
			<Link
				className="font-semibold h-full flex items-center font-sans px-3"
				to={lang.lang}
			>
				{lang.label}
			</Link>
		))}
	</div>
)

LanguageSelector.propTypes = {
	langs: PropTypes.array,
}

export default LanguageSelector
