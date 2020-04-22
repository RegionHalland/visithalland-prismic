import propTypes from 'prop-types'
import React from 'react'
import get from 'lodash.get'
import langs from '../../utils/langs'
import Header from './Header'

const HeaderContainer = ({ menu, meta }) => {
	// Prepare main navigation
	const mainNavigation = {
		featured_label: get(menu, 'menu_featured_label', null),
		misc_label: get(menu, 'menu_misc_label', null),
		items: get(menu, 'nav', []).map(navigationLink => {
			return {
				label: get(navigationLink, 'primary.menu_item_label', null),
				subItems: get(navigationLink, 'fields', []).map(subItem => ({
					label: get(subItem, 'menu_sub_item_link.title', null),
					meta: get(subItem, 'menu_sub_item_link._meta', null),
				})),
			}
		}),
	}

	// Prepare top navigation
	const topNavigation = get(menu, 'top_menu_links', []).map(el => ({
		label: get(el, 'top_menu_link_label', null),
		link: get(el, 'primary.top_menu_link', {}),
	}))

	return (
		<Header
			mainNavigation={mainNavigation}
			topNavigation={topNavigation}
			meta={meta}
			langs={langs}
		/>
	)
}

HeaderContainer.propTypes = {
	allMenus: propTypes.object,
}

export default HeaderContainer
