/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import propTypes from 'prop-types'

import Header from './header/Header'
import Footer from './Footer'

const Layout = ({ mainMenu, topMenu, children }) => {
	return (
		<div className="font-sans">
			<Header
				langs={['sv-se', 'da-dk']}
				links={mainMenu}
				supportLinks={topMenu}
			/>
			<div>{children}</div>
			<Footer />
		</div>
	)
}

Layout.propTypes = {
	mainMenu: propTypes.array.isRequired,
	topMenu: propTypes.array.isRequired,
	children: propTypes.node.isRequired,
}

export default Layout
