import propTypes from 'prop-types'
import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { linkResolver } from '../utils/linkResolver'
import Container from './Container'

import BackgroundPattern from '../images/bg-pattern.svg'

const Footer = ({ meta, navigation, support, langs }) => {
	return (
		<FooterContainer className="text-white bg-blue-600 px-4 md:px-6 pt-24 pb-48 absolute z-10 w-full">
			<Container className="flex flex-wrap">
				<div className="w-full md:w-4/12 mb-8">
					<Link
						to={linkResolver({
							lang: meta.lang,
							type: 'content',
							uid: 'frontpage',
						})}
						className="font-semibold text-xl md:text-2xl mb-4 block z-50 relative"
					>
						Visithalland.com
					</Link>
				</div>
				<div className="w-full md:w-4/12 mb-8">
					<nav className="list-none z-50 relative">
						<span className="font-semibold mb-4 block text-lg">
							{navigation.label}
						</span>
						{navigation.items.map(item => (
							<Link
								key={item._meta + item.label}
								className="text-lg mb-2 block focus:outline-none"
								to={linkResolver(item._meta)}
							>
								{item.label}
							</Link>
						))}
					</nav>
				</div>
				<div className="w-full md:w-4/12 mb-8">
					<nav className="list-none z-50 relative">
						<span className="font-semibold mb-4 block text-lg">
							{support.label}
						</span>
						{support.items.map(item => (
							<Link
								key={item._meta + item.label}
								className="text-lg mb-2 block focus:outline-none"
								to={linkResolver(item._meta)}
							>
								{item.label}
							</Link>
						))}
					</nav>
				</div>
			</Container>
		</FooterContainer>
	)
}

const FooterContainer = styled.div`
	background-image: url(${BackgroundPattern});
`

Footer.propTypes = {
	navigation: propTypes.object.isRequired,
	support: propTypes.object.isRequired,
	langs: propTypes.array.isRequired,
}

export default Footer
