import propTypes from 'prop-types'
import React from 'react'
import get from 'lodash.get'
import langs from '../utils/langs'
import Footer from './Footer'

const FooterContainer = ({ allMenus, meta }) => {
	const menu = get(allMenus, 'edges[0].node', {})
	const navigationGroup = get(menu, 'navigation_group', [])
	const supportGroup = get(menu, 'support_group', [])

	// Prepare navigation data
	const navigation = {
		label: menu.navigation_label,
		items: navigationGroup.map(navigationLink => {
			const navigationLabel = get(
				navigationLink,
				'navigation_link_label',
				null,
			)

			const title = navigationLabel
				? navigationLabel
				: get(navigationLink, 'navigation_link.title', '')

			return {
				label: title,
				_meta: get(navigationLink, 'navigation_link._meta', {}),
			}
		}),
	}

	// Prepare support data
	const support = {
		label: menu.support_label,
		items: supportGroup.map(supportLink => ({
			label: get(supportLink, 'support_link_label', ''),
			url: get(supportLink, 'support_link.url', ''),
			_meta: get(supportLink, 'support_link._meta', ''),
			type: get(supportLink, 'support_link._linkType', ''),
		})),
	}

	return (
		<Footer
			meta={meta}
			support={support}
			navigation={navigation}
			langs={langs}
		/>
	)
}

FooterContainer.propTypes = {
	allMenus: propTypes.object.isRequired,
}

export default FooterContainer
