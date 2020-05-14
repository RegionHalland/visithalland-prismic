import propTypes from 'prop-types'
import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { linkResolver } from '../utils/linkResolver'
import Container from './Container'
import FancyLink from './FancyLink'
import ListHeader from './ListHeader'
import { navigate } from 'gatsby'
import LogoHorizontal from './assets/LogoHorizontal'

import BackgroundPattern from '../images/bg-pattern.svg'

const Footer = ({ mainNavigation, meta, langs }) => {
	return (
		<FooterContainer className="text-white bg-blue-800 pt-24 pb-48 absolute z-10 w-full">
			<Container className="flex flex-wrap px-4 md:px-6">
				<div className="w-full md:w-4/12 mb-8">
					<Link
						to={linkResolver({
							lang: meta.lang,
							type: 'content',
							uid: 'frontpage',
						})}
						className="mb-4 block relative"
					>
						<LogoHorizontal className="mt-1 w-full max-w-xs" />
					</Link>
				</div>
				<div className="w-full lg:w-8/12 flex flex-wrap -mx-3">
					{mainNavigation.items.map(({ label, id }) => (
						<li
							className="w-full md:w-6/12 px-3 list-none mb-8"
							key={id}
						>
							<div className="mb-4">
								<ListHeader colorscheme="white" title={label} />
							</div>
							{mainNavigation.items[id].subItems.map(
								({ title, meta }) => (
									<div className="mb-3" key={meta.uid}>
										<FancyLink
											title={title}
											colorscheme="white"
											onClick={() =>
												navigate(linkResolver(meta))
											}
										/>
									</div>
								),
							)}
						</li>
					))}
				</div>
			</Container>
		</FooterContainer>
	)
}

const FooterContainer = styled.div`
	background-image: url(${BackgroundPattern});
`

Footer.propTypes = {
	langs: propTypes.array.isRequired,
}

export default Footer
