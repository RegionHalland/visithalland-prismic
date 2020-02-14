import propTypes from 'prop-types'
import React from 'react'
import get from 'lodash.get'
import langs from '../../utils/langs'

import Header from './Header'

const HeaderContainer = ({ allMenus }) => {
	const menu = get(allMenus, 'edges[0].node', {})

	// Prepare navigation data
	const navigation = {
		label: menu.navigation_label,
		items: menu.navigation_group.map(navigationLink => ({
			label: get(navigationLink, 'navigation_link_label', ''),
			_meta: get(navigationLink, 'navigation_link._meta', {}),
		})),
	}

	// Prepare support data
	const support = {
		label: menu.support_label,
		items: menu.support_group.map(supportLink => ({
			label: get(supportLink, 'support_link_label', ''),
			support_link: get(supportLink, 'support_link', {}),
		})),
	}

	return <Header support={support} navigation={navigation} langs={langs} />
}

HeaderContainer.propTypes = {
	allMenus: propTypes.object.isRequired,
}

export default HeaderContainer
