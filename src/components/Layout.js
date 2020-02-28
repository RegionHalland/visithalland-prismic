import React from 'react'
import PropTypes from 'prop-types'
import { ParallaxProvider } from 'react-scroll-parallax'

const Layout = ({ children }) => {
	return (
		<ParallaxProvider>
			<div className="font-sans">
				<div>{children}</div>
			</div>
		</ParallaxProvider>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
