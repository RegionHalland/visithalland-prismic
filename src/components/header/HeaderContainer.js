import propTypes from 'prop-types'
import React from 'react'
import get from 'lodash.get'
import langs from '../../utils/langs'
import Header from './Header'

const HeaderContainer = ({ menu, meta }) => {
	// Prepare main navigation
	const mainNavigation = {
		featured_label: menu.menu_featured_label,
		misc_label: menu.menu_misc_label,
		items: menu.nav.map((item, index) => ({
			label: get(item, 'primary.menu_item_label', null),
			id: index,
			subItems: item.fields.map(subItem => ({
				title: get(subItem, 'menu_sub_item_link.title', null),
				description: get(
					subItem,
					'menu_sub_item_link.seo_description',
					[],
				),
				image: get(
					subItem,
					'menu_sub_item_link.seo_featured_imageSharp.childImageSharp.fluid',
					null,
				),
				imageCopyright: get(
					subItem,
					'menu_sub_item_link.seo_featured_image.copyright',
					null,
				),
				meta: get(subItem, 'menu_sub_item_link._meta', null),
			})),
		})),
	}

	// Prepare top navigation
	const topNavigation = menu.top_menu_links.map(el => ({
		label: el.top_menu_link_label,
		link: el.top_menu_link,
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
