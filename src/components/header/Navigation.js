import PropTypes from 'prop-types'
import React from 'react'

import Link from 'gatsby-link'

import Container from '../Container'

const Navigation = ({ links }) => (
	<div className="px-3 py-6 md:py-0 md:px-4 bg-blue-600 w-full">
		<Container className="flex flex-col md:flex-row md:items-center">
			{links.map((link, index) => (
				<Link
					key={index}
					className="text-white text-xl md:text-base mb-3 md:mb-0 md:mr-6 py-2 font-medium"
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
