import React from 'react'
import propTypes from 'prop-types'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import TextRenderer from './TextRenderer'

const ArticleListItemSmall = ({ title, excerpt, image, to, ...props }) => (
	<Link to={to} {...props}>
		<div className="flex flex-wrap">
			<div className="w-32 h-48 md:w-48 md:h-64">
				{image && <Img fluid={image} className="w-full h-full" />}
			</div>
			<div className="flex flex-col md:justify-center flex-1 pl-3 md:pl-4 ">
				<h2 className="text-black text-xl md:text-3xl leading-tight font-semibold mb-3">
					{title}
				</h2>
				{excerpt && (
					<div className="text-base text-gray-700">
						<TextRenderer text={excerpt} />
					</div>
				)}
			</div>
		</div>
	</Link>
)

ArticleListItemSmall.propTypes = {
	title: propTypes.string.isRequired,
	to: propTypes.string.isRequired,
	excerpt: propTypes.arrayOf(propTypes.object),
	image: propTypes.object,
}

export default ArticleListItemSmall
