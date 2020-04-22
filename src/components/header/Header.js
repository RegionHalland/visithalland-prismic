import React, { useState } from 'react'
import styled from 'styled-components'
import TopNavigation from './TopNavigation'
import Container from '../Container'
import Link from 'gatsby-link'
import { linkResolver } from '../../utils/linkResolver'
import pattern from '../../images/bg-pattern.png'

const LANG_TITLES = {
	'sv-se': 'Sv',
	'da-dk': 'Dk',
	no: 'No',
}

const Header = ({ meta, mainNavigation, topNavigation, langs }) => {
	const [activeId, setActiveId] = useState(null)

	const menuItemPress = id => {
		return setActiveId(
			typeof activeId === 'number' && activeId === id ? null : id,
		)
	}

	const closeMenu = () => {
		setActiveId(null)
	}

	return (
		<header className="relative">
			<TopNavigation items={topNavigation} />
			<BackgroundPattern className="bg-blue-700">
				<Container className=" flex flex-wrap justify-between px-4 md:px-6 py-4 md:py-6">
					<Link
						to={linkResolver({
							lang: meta.lang,
							type: 'content',
							uid: 'frontpage',
						})}
						className="text-white leading-none font-semibold text-xl md:text-2xl md:pr-4 lg:pr-8"
					>
						Visithalland.com
					</Link>
					<div className="hidden md:flex flex-1 px-4 lg:px-8">
						{mainNavigation.items.map(({ label, id }) => (
							<button
								key={id}
								onClick={() => menuItemPress(id)}
								className="text-gray-500 hover:text-white focus:text-white focus:outline-none font-medium mr-6"
							>
								{label}
							</button>
						))}
					</div>
					<ul className="flex md:pl-4 lg:pl-8">
						{langs.map(item => (
							<li key={item}>
								<Link
									className="ml-4 font-bold text-white hover:text-gray-300"
									to={linkResolver(meta)}
								>
									{LANG_TITLES[item]}
								</Link>
							</li>
						))}
					</ul>
				</Container>
			</BackgroundPattern>
			{typeof activeId === 'number' && (
				<DropdownContainer className="absolute z-50 bottom-0 w-full">
					<Container className="px-4 md:px-6">
						<button
							className="flex justify-between focus:outline-none w-full p-3 bg-gray-200"
							onClick={closeMenu}
						>
							Stäng meny
						</button>
						{mainNavigation.items
							.find(x => x.id === activeId)
							.subItems.map(item => (
								<div>{item.label}</div>
							))}
					</Container>
				</DropdownContainer>
			)}
		</header>
	)
}

const DropdownContainer = styled.div`
	transform: translateY(100%);
`

const BackgroundPattern = styled.div`
	background-image: url(${pattern});
	background-size: 250px 250px;
`

export default Header
