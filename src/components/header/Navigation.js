import PropTypes from 'prop-types'
import React from 'react'

import Link from 'gatsby-link'

import Container from '../Container'

const Navigation = ({ links }) => (
	<div className="px-3 md:px-4 bg-blue-600">
		<Container className="flex items-center">
			{links.map((link, index) => (
				<Link
					className="text-white mr-6 py-2 font-medium"
					to={link.slug}
				>
					{link.label}
				</Link>
			))}
		</Container>
	</div>
)

Navigation.propTypes = {
	links: PropTypes.array,
}

export default Navigation
