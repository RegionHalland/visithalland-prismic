import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring'
import Link from 'gatsby-link'

import useTailwindBreakpoint from '../../hooks/useTailwindBreakpoint'

import Container from '../Container'
import Menu from '../icons/Menu'

import SupportHeader from './SupportHeader'
import Navigation from './Navigation'
import LanguageSelector from './LanguageSelector'

const Header = ({ langs, links, supportLinks }) => {
	const [menuOpen, setMenuOpen] = useState(false)
	const breakpoint = useTailwindBreakpoint()

	const handleClick = () => {
		setMenuOpen(!menuOpen)
	}

	const transitions = useTransition(menuOpen, null, {
		from: { position: 'absolute', transform: 'translate3d(0,-100%,0)' },
		enter: { transform: 'translate3d(0,0,0)' },
		leave: { transform: 'translate3d(0,-100%,0)' },
	})

	return (
		<header className="font-sans">
			<SupportHeader supportLinks={supportLinks} />
			<div className="bg-white px-3 md:px-4 z-50 relative">
				<Container className="flex h-16 items-center justify-between ">
					<Link to="/" className="text-xl font-semibold text-black">
						Visithalland
					</Link>

					<div className="flex flex-row items-center">
						<LanguageSelector langs={langs} />
						<button
							onClick={handleClick}
							className="md:hidden focus:outline-none p-2 ml-3"
						>
							<Menu height={24} width={24} />
						</button>
					</div>
				</Container>
			</div>
			{breakpoint === 'xs' || breakpoint === 'sm' ? (
				<div className="w-full relative">
					{transitions.map(
						({ item, key, props }) =>
							item && (
								<animated.div
									key={key}
									style={props}
									className="absolute top-0 left-0 w-full z-40"
								>
									<Navigation links={links} />
								</animated.div>
							),
					)}
				</div>
			) : (
				<Navigation links={links} />
			)}
		</header>
	)
}

Header.propTypes = {
	supportLinks: PropTypes.array,
	links: PropTypes.array,
	langs: PropTypes.array,
}

export default Header
