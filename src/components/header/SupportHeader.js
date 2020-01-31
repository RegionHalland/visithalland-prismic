import PropTypes from 'prop-types'
import React from 'react'

import Link from 'gatsby-link'

import Container from '../Container'

const SupportHeader = ({ supportLinks }) => (
	<div className="px-3 md:px-4 bg-gray-200">
		<Container className="flex items-center justify-end">
			{supportLinks.map((supportLink, index) => (
				<Link
					key={index}
					to={supportLink.slug}
					className=" py-1 ml-5 text-sm"
				>
					{supportLink.label}
				</Link>
			))}
		</Container>
	</div>
)

SupportHeader.propTypes = {
	supportLinks: PropTypes.array,
}

export default SupportHeader
