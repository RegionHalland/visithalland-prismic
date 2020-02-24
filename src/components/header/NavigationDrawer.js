import propTypes from 'prop-types'
import React from 'react'

import Link from 'gatsby-link'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { useTransition, animated, config } from 'react-spring'

const NavigationDrawer = ({ toggleMenu, navigation, support, langs }) => {
	const navTransition = useTransition(navigation.items, item => item.label, {
		from: { transform: 'translateY(50%)', opacity: 0 },
		enter: { transform: 'translateY(0%)', opacity: 1 },
		leave: { transform: 'translateY(50%)', opacity: 0 },
		trail: 100,
		unique: true,
	})

	return (
		<nav className="flex flex-col flex-1 list-none px-4 md:px-12 pt-32 h-full bg-blue-700">
			<div className="mb-12 w-full">
				<span className="text-base font-medium text-gray-400 block mb-6">
					{navigation.label}
				</span>
				{navTransition.map(({ item, key, props }) => (
					<animated.div key={key} style={props}>
						<Link
							onClick={toggleMenu}
							className="block text-2xl md:text-3xl font-medium mb-3"
							key={item._meta.uid}
							to={item._meta.uid}
						>
							{item.label}
						</Link>
					</animated.div>
				))}
			</div>
			<div className="mb-12 w-full">
				<span className="text-base font-medium text-gray-400 block mb-6">
					Språk
				</span>
				{langs.map(lang => (
					<Link
						className="mr-6 text-base"
						onClick={toggleMenu}
						key={lang}
						to={lang}
					>
						{lang}
					</Link>
				))}
			</div>
			<div className="mb-12 w-full">
				<span className="text-base font-medium text-gray-400 block mb-6">
					{support.label}
				</span>
				{support.items.map(supportItem => (
					<Link
						className="block text-lg mb-3"
						onClick={toggleMenu}
						key={supportItem.url}
						to={supportItem.url}
					>
						{supportItem.label}
					</Link>
				))}
			</div>
		</nav>
	)
}

export default NavigationDrawer
