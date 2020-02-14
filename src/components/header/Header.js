import propTypes from 'prop-types'
import React from 'react'
import get from 'lodash.get'
import { langs } from '../../../gatsby-config'

const Header = ({ allMenus }) => {
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

	return (
		<header className="font-sans">
			<div className="navigation">
				{navigation.label}
				{navigation.items.map(navigationItem => (
					<li key={navigationItem._meta.uid}>
						{navigationItem.label}
					</li>
				))}
			</div>
			<div className="language-selector">
				Språk | Sprog
				<ul>
					{langs.map(lang => (
						<li key={lang}>{lang}</li>
					))}
				</ul>
			</div>
			<div className="support">
				{support.label}
				{support.items.map(supportItem => (
					<li key={supportItem.support_link.url}>
						{supportItem.label}
					</li>
				))}
			</div>
		</header>
	)
}

Header.propTypes = {
	allMenus: propTypes.object.isRequired,
}

export default Header
