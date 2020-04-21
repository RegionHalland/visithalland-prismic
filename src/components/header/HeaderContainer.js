import propTypes from 'prop-types'
import React from 'react'
import get from 'lodash.get'
import langs from '../../utils/langs'
import Header from './Header'

const HeaderContainer = ({ meta }) => {
	return null
	return <Header meta={meta} langs={langs} />
}

HeaderContainer.propTypes = {
	allMenus: propTypes.object,
}

export default HeaderContainer
