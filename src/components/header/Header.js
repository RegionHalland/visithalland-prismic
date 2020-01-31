import PropTypes from 'prop-types'
import React from 'react'

import Link from 'gatsby-link'

import Container from '../Container'

import SupportHeader from './SupportHeader'
import Navigation from './Navigation'
import LanguageSelector from './LanguageSelector'

const Header = ({ langs, links, supportLinks }) => (
	<header className="font-sans">
		<SupportHeader supportLinks={supportLinks} />
		<div className="bg-white px-3 md:px-4">
			<Container className="flex h-16 items-center justify-between ">
				<Link to="/" className="text-xl font-semibold text-black">
					Visithalland
				</Link>
				<LanguageSelector langs={langs} />
			</Container>
		</div>
		<Navigation links={links} />
	</header>
)

Header.propTypes = {
	supportLinks: PropTypes.array,
	links: PropTypes.array,
	langs: PropTypes.array,
}

export default Header
