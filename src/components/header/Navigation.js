import propTypes from 'prop-types'
import React from 'react'
import Link from 'gatsby-link'
import { linkResolver } from '../../utils/linkResolver'
import Container from '../Container'

const Navigation = ({ links }) => (
	<div className="px-3 py-6 md:py-0 md:px-4 bg-blue-600 w-full">
		<Container className="flex flex-col md:flex-row md:items-center">
			{links.map(link => {
				return (
					<Link
						key={link.main_menu_link._meta.uid}
						to={linkResolver(link.main_menu_link._meta)}
						className="text-white text-xl md:text-base mb-3 md:mb-0 md:mr-6 py-2 font-medium"
					>
						{link.main_menu_link_label}
					</Link>
				)
			})}
		</Container>
	</div>
)

Navigation.propTypes = {
	links: propTypes.array.isRequired,
}

export default Navigation
