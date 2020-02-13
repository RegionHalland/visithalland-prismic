import React from 'react'
import propTypes from 'prop-types'

const Layout = ({ children }) => {
	return (
		<div className="font-sans">
			<div>{children}</div>
		</div>
	)
}

Layout.propTypes = {
	children: propTypes.node.isRequired,
}

export default Layout
