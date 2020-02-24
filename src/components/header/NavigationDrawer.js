import propTypes from 'prop-types'
import React from 'react'
import { linkResolver } from '../../utils/linkResolver'
import Link from 'gatsby-link'
import { useTransition, animated } from 'react-spring'

const NavigationDrawer = ({ toggleMenu, navigation, support, langs, meta }) => {
	const navTransition = useTransition(navigation.items, item => item.label, {
		from: { transform: 'translateY(50%)', opacity: 0 },
		enter: { transform: 'translateY(0%)', opacity: 1 },
		leave: { transform: 'translateY(50%)', opacity: 0 },
		trail: 200,
		unique: true,
	})

	return (
		<nav className="flex flex-col flex-1 list-none px-4 md:px-12 pb-24 pt-32 h-full overflow-scroll scrolling-touch bg-blue-700">
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
							to={linkResolver(item._meta)}
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
				{langs.map(lang => {
					let altPage = meta.alternateLanguages.find(
						el => el.lang === lang,
					)
					if (!altPage) {
						altPage = meta.lang === lang ? meta : { lang }
					}

					return (
						<Link
							className="mr-6 text-base"
							onClick={toggleMenu}
							key={lang}
							to={linkResolver(altPage)}
						>
							{lang === 'sv-se'
								? 'Svenska'
								: lang == 'no'
								? 'Norsk'
								: lang == 'da-dk'
								? 'Dansk'
								: ''}
						</Link>
					)
				})}
			</div>
			<div className="mb-12 w-full">
				<span className="text-base font-medium text-gray-400 block mb-6">
					{support.label}
				</span>
				{support.items.map(supportItem => {
					if (supportItem.type === 'Link.document') {
						return (
							<Link
								className="block text-lg mb-3"
								onClick={toggleMenu}
								key={supportItem._meta.uid}
								to={linkResolver(supportItem._meta)}
							>
								{supportItem.label}
							</Link>
						)
					}
					if (supportItem.type === 'Link.image') return null
					return (
						<a
							className="block text-lg mb-3"
							onClick={toggleMenu}
							key={supportItem.url}
							href={supportItem.url}
						>
							{supportItem.label}
						</a>
					)
				})}
			</div>
		</nav>
	)
}

NavigationDrawer.propTypes = {
	navigation: propTypes.object.isRequired,
	support: propTypes.object.isRequired,
	langs: propTypes.array.isRequired,
	toggleMenu: propTypes.func.isRequired,
}

export default NavigationDrawer
