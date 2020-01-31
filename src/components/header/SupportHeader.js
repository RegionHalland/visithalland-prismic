import PropTypes from 'prop-types'
import React from 'react'
import Link from 'gatsby-link'
import { linkResolver } from '../../utils/linkResolver'
import Container from '../Container'

const SupportHeader = ({ supportLinks }) => (
	<div className="px-3 md:px-4 bg-gray-200 relative z-50">
		<Container className="flex items-center justify-end">
			{supportLinks.map(supportLink => {
				// If we have an internal link
				if (supportLink.top_menu_link._linkType === 'Link.document') {
					return (
						<Link
							key={supportLink.top_menu_link._meta.uid}
							to={linkResolver(supportLink.top_menu_link._meta)}
							className="text-gray-600 py-1 ml-5 text-sm"
						>
							{supportLink.top_menu_link_label}
						</Link>
					)
				}
				// If we have an external link or a link to a file or a document
				return (
					<a
						key={supportLink.top_menu_link.url}
						href={supportLink.top_menu_link.url}
						className="text-gray-600 py-1 ml-5 text-sm"
					>
						{supportLink.top_menu_link_label}
					</a>
				)
			})}
		</Container>
	</div>
)

SupportHeader.propTypes = {
	supportLinks: PropTypes.array,
}

export default SupportHeader
