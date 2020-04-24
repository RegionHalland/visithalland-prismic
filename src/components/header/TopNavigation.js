import React from 'react'
import propTypes from 'prop-types'
import Container from '../Container'

const TopNavigation = ({ items }) => (
	<nav className="relative bg-blue-600">
		<Container className="px-4 md:px-6">
			<ul className="flex relative md:justify-end py-2 md:py-3 overflow-x-scroll scrolling-touch">
				{items.map((el, index) => (
					<li key={el.label} className="leading-none">
						<a
							className="text-white hover:text-gray-400 mr-3 md:mr-0 md:ml-4 text-xs md:text-sm leading-none"
							href={el.link.url}
						>
							{el.label}
						</a>
					</li>
				))}
			</ul>
		</Container>
	</nav>
)

TopNavigation.propTypes = {
	items: propTypes.arrayOf(propTypes.object),
}

export default TopNavigation
