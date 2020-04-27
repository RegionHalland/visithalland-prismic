import propTypes from 'prop-types'
import React from 'react'
import get from 'lodash.get'
import langs from '../utils/langs'
import Footer from './Footer'

const FooterContainer = ({ menu, meta }) => {
	// Prepare main navigation
	const mainNavigation = {
		featured_label: get(menu, 'menu_featured_label', null),
		misc_label: get(menu, 'menu_misc_label', null),
		items: get(menu, 'nav', []).map((item, index) => ({
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
	const topNavigation = get(menu, 'top_menu_links', []).map(el => ({
		label: get(el, 'top_menu_link_label', null),
		link: get(el, 'primary.top_menu_link', {}),
	}))

	return (
		<Footer
			mainNavigation={mainNavigation}
			topNavigation={topNavigation}
			meta={meta}
			langs={langs}
		/>
	)
}

FooterContainer.propTypes = {
	allMenus: propTypes.object,
}

export default FooterContainer
