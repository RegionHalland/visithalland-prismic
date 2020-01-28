// https://github.com/birkir/gatsby-source-prismic-graphql/issues/42
// https://prismic.io/docs/reactjs/beyond-the-api/link-resolving

import { Link } from 'gatsby'
import React from 'react'

export function LinkResolver(type, element, content, children, index) {
	if (element.data.link_type === 'Web') {
		return <a href={element.data.url}>{content}</a>
	}
	return (
		<Link key={element.data.id} to={element.data.uid}>
			{content}
		</Link>
	)
}
