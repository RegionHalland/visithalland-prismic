import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Container from '../Container'
import { linkResolver } from '../../utils/linkResolver'

const Header = ({ meta, mainNavigation, topNavigation, langs }) => {
	return (
		<StyledHeader className="text-white px-4 md:px-6 absolute z-50 w-full">
			<Container className="h-24 md:h-32 flex justify-between items-center">
				<Link
					to={linkResolver({
						lang: meta.lang,
						type: 'content',
						uid: 'frontpage',
					})}
					className="font-semibold text-xl md:text-2xl z-50 relative"
				>
					Visithalland.com
				</Link>
				topNavigation
				<ul>
					{topNavigation.map((el, index) => {
						return (
							<li key={index}>
								<a href={el.link.url}>{el.label}</a>
							</li>
						)
					})}
				</ul>
				Main navigation
				<ul>
					{mainNavigation.items.map((el, index) => {
						return (
							<li key={index}>
								{el.label}
								<ul key={index}>
									{el.subItems.map((el, index) => (
										<li key={index}>{el.label}</li>
									))}
								</ul>
							</li>
						)
					})}
				</ul>
			</Container>
		</StyledHeader>
	)
}

const StyledHeader = styled.div`
	&:before {
		${tw`absolute top-0 left-0 right-0 h-64 pointer-events-none`}
		content: '';
		background: linear-gradient(
			180deg,
			rgba(5, 36, 45, 0.3) 0%,
			rgba(5, 35, 45, 0) 100%
		);
	}
`

export default Header
