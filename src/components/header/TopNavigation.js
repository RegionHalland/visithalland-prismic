import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Container from '../Container'
import { linkResolver } from '../../utils/linkResolver'

const TopNavigation = ({ items }) => {
	return (
		<nav className="relative bg-blue-700 z-50">
			<Container className="px-4 md:px-6">
				<StyledScrollContainer className="flex relative md:justify-end py-2 md:py-2 overflow-x-scroll scrolling-touch">
					{items.map((el, index) => (
						<li key={el.label} className="leading-none">
							{el.link._linkType === 'Link.web' ? (
								<a
									className="text-white hover:text-gray-400 mr-3 md:mr-0 md:ml-4 text-xs md:text-sm leading-none"
									href={el.link.url}
								>
									{el.label}
								</a>
							) : (
								<Link
									className="text-white hover:text-gray-400 mr-3 md:mr-0 md:ml-4 text-xs md:text-sm leading-none"
									to={linkResolver(el.link._meta)}
								>
									{el.label}
								</Link>
							)}
						</li>
					))}
				</StyledScrollContainer>
			</Container>
		</nav>
	)
}

const StyledScrollContainer = styled.ul`
	-ms-overflow-style: none;
	&::-webkit-scrollbar {
		width: 0px;
		height: 0px;
		background: transparent;
	}
`

TopNavigation.propTypes = {
	items: propTypes.arrayOf(propTypes.object),
}

export default TopNavigation
