import React, { useState } from 'react'
import styled from 'styled-components'

import TopNavigation from './TopNavigation'
import HeaderLogo from './HeaderLogo'
import NavItem from './NavItem'
import LanguageMenu from './LanguageMenu'
import Dropdown from './Dropdown'

import Container from '../Container'
import pattern from '../../images/bg-pattern.png'

const Header = ({ meta, mainNavigation, topNavigation, langs }) => {
	const [activeId, setActiveId] = useState(null)

	const navItemPress = id => {
		return setActiveId(
			typeof activeId === 'number' && activeId === id ? null : id,
		)
	}

	const closeMenu = () => setActiveId(null)

	return (
		<React.Fragment>
			<TopNavigation items={topNavigation} />
			<header className="sticky top-0 z-50">
				<BackgroundPattern>
					<Container className="flex flex-wrap justify-between items-center lg:px-6 lg:py-6">
						<HeaderLogo meta={meta} />
						<MainNav className="list-reset relative flex overflow-x-scroll scrolling-touch w-full lg:flex-1 order-3 bg-blue-600 lg:bg-transparent px-4 lg:px-8 py-3 lg:py-0">
							{mainNavigation.items.map(({ label, id }) => (
								<li className="flex-shrink-0" key={id}>
									<NavItem
										title={label}
										active={activeId === id}
										onClick={() => navItemPress(id)}
									/>
								</li>
							))}
						</MainNav>
						<LanguageMenu languages={langs} meta={meta} />
					</Container>
				</BackgroundPattern>
				{typeof activeId === 'number' && (
					<Dropdown
						featuredLabel={mainNavigation.featured_label}
						featuredArticle={
							mainNavigation.items.find(x => x.id === activeId)
								.subItems[0]
						}
						miscArticles={mainNavigation.items
							.find(x => x.id === activeId)
							.subItems.filter((x, index) => index !== 0)}
						miscLabel={mainNavigation.misc_label}
						close={closeMenu}
					/>
				)}
			</header>
		</React.Fragment>
	)
}

const MainNav = styled.ul`
	-ms-overflow-style: none;

	&::-webkit-scrollbar {
		width: 0px;
		height: 0px;
		background: transparent;
	}
`

const BackgroundPattern = styled.div`
	background-image: url(${pattern});
	background-color: #05242d;
	background-size: 250px 250px;
`

export default Header
