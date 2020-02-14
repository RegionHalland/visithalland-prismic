import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { linkResolver } from '../../utils/linkResolver'
import Image from '../Image'

const ArticleCarousel = ({ items }) => (
	<div>
		{items.map(({ title, tags, meta, image }) => (
			<div>
				<Image fluid={image} />
				{tags.map(tag => (
					<span>{tag}</span>
				))}
				<Link to={linkResolver(meta)}>{title}</Link>
			</div>
		))}
	</div>
)

ArticleCarousel.propTypes = {
	items: PropTypes.array.isRequired,
}

export default ArticleCarousel
