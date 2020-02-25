import propTypes from 'prop-types'
import React, { useState } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { useTransition, animated } from 'react-spring'
import useTailwindBreakpoint from '../../hooks/useTailwindBreakpoint'
import { linkResolver } from '../../utils/linkResolver'
import Container from '../Container'
import Menu from '../icons/Menu'
import NavigationDrawer from './NavigationDrawer'

const Header = ({ meta, navigation, support, langs }) => {
	const [scrolled, setScrolled] = useState(true)
	const [menuOpen, setMenuOpen] = useState(false)
	const breakpoint = useTailwindBreakpoint()

	const toggleMenu = () => {
		setMenuOpen(!menuOpen)
	}

	useScrollPosition(
		({ currPos }) => {
			const offset = currPos.y
			setScrolled(offset < -25)
		},
		[scrolled],
		false,
		false,
		300,
	)

	const drawerTransition = useTransition(menuOpen, null, {
		from: { transform: 'translateX(100%)' },
		enter: { transform: 'translateX(0%)' },
		leave: { transform: 'translateX(100%)' },
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
		<StyledHeader className="text-white px-4 md:px-6 absolute z-50 w-full">
			<Container className="h-24 md:h-32 flex justify-between items-center">
				<Link
					to={linkResolver(meta)}
					className="font-semibold text-xl md:text-2xl z-50 relative"
				>
					Visithalland.com
				</Link>
				{breakpoint === 'lg' ||
					(breakpoint === 'xl' && (
						<nav className="mr-10 md:mr-48 flex-1 flex-row flex justify-end list-none z-50 relative">
							{navTransition.map(({ item, key, props }) => (
								<animated.div key={key} style={props}>
									<Link
										className="text-lg inline-block ml-8 focus:outline-none"
										to={linkResolver(item._meta)}
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
					<MenuButton
						scrolled={scrolled}
						onClick={toggleMenu}
						className="flex items-center px-4 p-2 rounded-full focus:outline-none"
					>
						<span className="text-lg mr-2">Meny</span>
						<Menu
							height={24}
							width={24}
							className="text-white align-bottom mt-1"
						/>
					</MenuButton>
				</MenuButtonContainer>

				{drawerTransition.map(
					({ item, key, props }) =>
						item && (
							<animated.div
								key={key}
								style={props}
								className="fixed shadow-lg top-0 right-0 h-screen w-full md:w-6/12 z-40"
							>
								<NavigationDrawer
									toggleMenu={toggleMenu}
									navigation={navigation}
									support={support}
									langs={langs}
									meta={meta}
								/>
							</animated.div>
						),
				)}
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

const MenuButton = styled.button`
	${tw`transition-bg`}
	${props => (props.scrolled ? tw`bg-blue-700 shadow-lg` : 'bg-transparent')};
`

const MenuButtonContainer = styled.div`
	${tw`fixed`};
	right: ${props =>
		props.offset ? 'calc(calc(100vw - 1300px) / 2)' : '0px'};
`

Header.propTypes = {
	navigation: propTypes.object.isRequired,
	support: propTypes.object.isRequired,
	langs: propTypes.array.isRequired,
}

export default Header
