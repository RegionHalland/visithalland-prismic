import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import Container from '../Container'
import { linkResolver } from '../../utils/linkResolver'

const TopNavigation = ({ items }) => (
	<nav className="relative bg-blue-600">
		<StyledContainer className="px-4 md:px-6">
			<ul className="flex relative md:justify-end py-2 md:py-3 overflow-x-scroll">
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
		</StyledContainer>
	</nav>
)

// Add a fade to the right end of the container on smaller devices
const StyledContainer = styled(Container)`
	@media (max-width: 767px) {
		&:after {
			content: '';
			display: block;
			position: fixed;
			right: 1rem;
			top: 0;
			width: 2rem;
			height: 40px;
			pointer-events: none;
			background: linear-gradient(to left, #11313a, rgba(17, 49, 58, 0));
		}
	}
`

TopNavigation.propTypes = {
	items: propTypes.arrayOf(propTypes.object),
}

export default TopNavigation
