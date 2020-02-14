import propTypes from 'prop-types'
import React, { useState } from 'react'

import Link from 'gatsby-link'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import useTailwindBreakpoint from '../../hooks/useTailwindBreakpoint'
import { useTransition, animated, config } from 'react-spring'

import Container from '../Container'
import Menu from '../icons/Menu'
import NavigationDrawer from './NavigationDrawer'

const Header = ({ navigation, support, langs }) => {
	const [menuOpen, setMenuOpen] = useState(false)
	const breakpoint = useTailwindBreakpoint()

	const toggleMenu = () => {
		setMenuOpen(!menuOpen)
	}

	const drawerTransition = useTransition(menuOpen, null, {
		from: { transform: 'translateX(100%)' },
		enter: { transform: 'translateX(0%)' },
		leave: { transform: 'translateX(100%)' },
		config: config.slow,
	})

	const navTransition = useTransition(
		!menuOpen ? navigation.items : [],
		item => item.label,
		{
			from: { transform: 'translateY(-100%)', opacity: 0 },
			enter: { transform: 'translateY(0%)', opacity: 1 },
			leave: { transform: 'translateY(-100%)', opacity: 0 },
			trail: 100,
			unique: true,
		},
	)

	return (
		<StyledHeader className="font-sans text-white px-4 md:px-6">
			<Container className="h-24 md:h-32 flex justify-between items-center">
				<div className="font-semibold text-xl md:text-2xl z-50 relative">
					Visithalland.com
				</div>
				{breakpoint === 'lg' ||
					(breakpoint === 'xl' && (
						<nav className="mr-10 md:mr-24 flex-1 flex-row flex justify-end list-none z-50 relative">
							{navTransition.map(({ item, key, props }) => (
								<animated.div key={key} style={props}>
									<Link
										className="text-lg inline-block ml-8 focus:outline-none"
										to={item._meta.uid}
									>
										{item.label}
									</Link>
								</animated.div>
							))}
						</nav>
					))}
				<MenuButtonContainer
					offset={breakpoint === 'xl' ? 1 : 0}
					className="h-24 md:h-32 mr-4 md:mr-6 flex items-center z-50"
				>
					<button
						onClick={toggleMenu}
						className="p-3 rounded-full focus:outline-none"
					>
						<Menu height={24} width={24} className="text-white" />
					</button>
				</MenuButtonContainer>

				{drawerTransition.map(
					({ item, key, props }) =>
						item && (
							<animated.div
								key={key}
								style={props}
								className="fixed bg-gray-200 top-0 right-0 h-screen w-full md:w-6/12 z-40"
							>
								<NavigationDrawer
									toggleMenu={toggleMenu}
									navigation={navigation}
									support={support}
									langs={langs}
								/>
							</animated.div>
						),
				)}
			</Container>
		</StyledHeader>
	)
}

const StyledHeader = styled.div`
	position: relative;
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

const MenuButtonContainer = styled.div`
	position: fixed;
	right: ${props =>
		props.offset ? 'calc(calc(100vw - 1300px) / 2)' : '0px'};
`

Header.propTypes = {
	navigation: propTypes.object.isRequired,
	support: propTypes.object.isRequired,
	langs: propTypes.array.isRequired,
}

export default Header
