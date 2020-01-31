import React from 'react'
import propTypes from 'prop-types'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import TextRenderer from './TextRenderer'

const ArticleListItem = ({ title, excerpt, image, to, ...props }) => (
	<Link to={to} {...props}>
		<div className="flex flex-wrap">
			<div className="w-32 h-48">
				<Img fluid={image} className="w-full h-full" />
			</div>
			<div className="flex flex-col md:justify-center flex-1 px-3">
				<h2 className="font-sans text-black text-xl md:text-3xl font-semibold mb-2">
					{title}
				</h2>
				<div className="font-sans text-base text-gray-700">
					<TextRenderer text={excerpt} />
				</div>
			</div>
		</div>
	</Link>
)

ArticleListItem.propTypes = {
	title: propTypes.string.isRequired,
	to: propTypes.string.isRequired,
	excerpt: propTypes.arrayOf(propTypes.object),
	image: propTypes.object,
}

export default ArticleListItem
