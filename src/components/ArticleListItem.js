import PropTypes from 'prop-types'
import React from 'react'

import Link from 'gatsby-link'
import Img from 'gatsby-image'

const ArticleListItem = ({ title, excerpt, image, ...props }) => (
	<Link {...props}>
		<div className="flex flex-wrap">
			<div className="w-32 h-48">
				<Img fluid={image} className="w-full h-full" />
			</div>
			<div className="flex flex-col md:justify-center flex-1 px-3">
				<h2 className="font-sans text-black text-xl md:text-3xl font-semibold mb-2">
					{title}
				</h2>
				<p className="font-sans text-base text-gray-700">{excerpt}</p>
			</div>
		</div>
	</Link>
)

ArticleListItem.propTypes = {
	title: PropTypes.string.isRequired,
	excerpt: PropTypes.string.isRequired,
	image: PropTypes.object.isRequired,
}

export default ArticleListItem
