import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useTransition, animated } from 'react-spring'

import TopNavigation from './TopNavigation'
import HeaderLogo from './HeaderLogo'
import NavItem from './NavItem'
import LanguageMenu from './LanguageMenu'
import Dropdown from './Dropdown'
import tw from 'tailwind.macro'

import Container from '../Container'
import pattern from '../../images/bg-pattern.png'

const Header = ({ meta, mainNavigation, topNavigation, langs }) => {
	const [dropdownOpen, setDropdownOpen] = useState(false)
	const [dropdownId, setDropdownId] = useState(null)
	const [submenuId, setSubmenuId] = useState(null)

	const handleClick = id => {
		return setDropdownId(
			typeof dropdownId === 'number' && dropdownId === id ? null : id,
		)
	}

	const closeDropdown = () => {
		setDropdownId(null)
	}

	// Handle open/closed state
	useEffect(() => {
		if (typeof dropdownId === 'number' && !dropdownOpen) {
			setDropdownOpen(true)
		} else if (dropdownId == null && dropdownOpen) {
			setDropdownOpen(false)
		}
	}, [dropdownId, dropdownOpen])

	// Set submenu id based on the dropdown id
	useEffect(() => {
		if (typeof dropdownId === 'number' && dropdownId !== submenuId) {
			setSubmenuId(dropdownId)
		}
	}, [dropdownId, submenuId])

	const transition = useTransition(dropdownOpen, null, {
		from: { transform: 'translateY(-100%)' },
		enter: { transform: 'translateY(0%)' },
		leave: { transform: 'translateY(-100%)' },
		initial: null,
		unique: true,
	})

	return (
		<React.Fragment>
			<TopNavigation items={topNavigation} />
			<header className="sticky top-0 z-40">
				<BackgroundPattern>
					<Container className="flex flex-wrap justify-between items-center lg:px-6 lg:py-6">
						<HeaderLogo meta={meta} />
						<MainNav>
							{mainNavigation.items.map(({ label, id }) => (
								<li className="flex-shrink-0" key={id}>
									<NavItem
										title={label}
										active={dropdownId === id}
										onClick={() => handleClick(id)}
									/>
								</li>
							))}
						</MainNav>
						<LanguageMenu languages={langs} meta={meta} />
					</Container>
				</BackgroundPattern>
				<DropdownPosition>
					{transition.map(
						({ item, key, props }) =>
							item && (
								<animated.div key={key} style={props}>
									<Dropdown
										closeDropdown={closeDropdown}
										submenuId={submenuId}
										submenus={mainNavigation.items}
									/>
								</animated.div>
							),
					)}
				</DropdownPosition>
			</header>
		</React.Fragment>
	)
}

const DropdownPosition = styled.div`
	${tw`absolute z-40 bottom-0 w-full`};
	transform: translateY(100%);
`

const BackgroundPattern = styled.div`
	background-image: url(${pattern});
	${tw`bg-blue-800 z-50 relative`}
	background-size: 250px 250px;
`

const MainNav = styled.ul`
	${tw`relative flex overflow-x-scroll scrolling-touch w-full lg:flex-1 order-3 bg-blue-700 lg:bg-transparent px-4 lg:px-8 py-2 lg:py-0`};
	-ms-overflow-style: none;

	&::-webkit-scrollbar {
		width: 0px;
		height: 0px;
		background: transparent;
	}
`

export default Header
