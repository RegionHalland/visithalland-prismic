/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

import Header from './header/Header'

const Layout = ({ mainMenu, topMenu, children }) => {
	return (
		<div className="font-sans">
			<Header
				langs={['sv-se', 'da-dk']}
				links={mainMenu}
				supportLinks={topMenu}
			/>
			<div>{children}</div>
			<footer>Footer</footer>
		</div>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
