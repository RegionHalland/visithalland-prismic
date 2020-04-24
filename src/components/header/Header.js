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

	const closeMenu = () => {
		setActiveId(null)
	}

	return (
		<React.Fragment>
			<TopNavigation items={topNavigation} />
			<header className="sticky top-0 z-50">
				<BackgroundPattern>
					<Container className="flex flex-wrap justify-between px-4 md:px-6 py-4 md:py-6">
						<HeaderLogo meta={meta} />
						<ul className="hidden lg:flex flex-1 px-6 lg:px-8">
							{mainNavigation.items.map(({ label, id }) => (
								<li key={id}>
									<NavItem
										title={label}
										active={activeId === id}
										onClick={() => navItemPress(id)}
									/>
								</li>
							))}
						</ul>
						<LanguageMenu languages={langs} meta={meta} />
					</Container>
					<ul className="flex lg:hidden overflow-x-scroll relative w-full bg-blue-600 px-4 md:px-6 py-3 ">
						{mainNavigation.items.map(({ label, id }) => (
							<li key={id}>
								<NavItem
									title={label}
									active={activeId === id}
									onClick={() => navItemPress(id)}
								/>
							</li>
						))}
					</ul>
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

const BackgroundPattern = styled.div`
	background-image: url(${pattern});
	background-color: #05242d;
	background-size: 250px 250px;
`

export default Header
