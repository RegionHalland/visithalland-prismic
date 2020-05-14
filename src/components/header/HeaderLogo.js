import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { linkResolver } from '../../utils/linkResolver'
import LogoHorizontal from '../assets/LogoHorizontal'

const HeaderLogo = ({ meta }) => (
	<Link
		to={linkResolver({ lang: meta.lang })}
		className="text-white leading-none font-semibold text-xl order-1 md:text-2xl md:pr-4 lg:pr-8 pl-4 lg:pl-0 py-4 lg:py-0"
	>
		<LogoHorizontal className="md:hidden mt-1" width={190} />
		<LogoHorizontal className="hidden md:block mt-1" width={250} />
	</Link>
)

HeaderLogo.propTypes = {
	meta: PropTypes.object.isRequired,
}

export default HeaderLogo
