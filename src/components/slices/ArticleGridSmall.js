import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { linkResolver } from '../../utils/linkResolver'
import Image from '../Image'

const ArticleGridSmall = ({ items }) => (
	<div>
		{items.map(({ title, tags, meta, image }, index) => (
			<div key={`${title}-${index}`}>
				<Image fluid={image} />
				{tags.map(tag => (
					<span key={tag}>{tag}</span>
				))}
				<Link to={linkResolver(meta)}>{title}</Link>
			</div>
		))}
	</div>
)

ArticleGridSmall.propTypes = {
	items: PropTypes.array.isRequired,
}

export default ArticleGridSmall
