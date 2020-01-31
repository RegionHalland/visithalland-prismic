import PropTypes from 'prop-types'
import React from 'react'

import styled from 'styled-components'
import tw from 'tailwind.macro'

import Link from 'gatsby-link'
import Img from 'gatsby-image'

const ArticleImageThumbnail = ({ title, excerpt, image, tags, ...props }) => (
	<Link {...props} className="relative block">
		<StyledImageContainer className="h-full w-full relative">
			<Img fluid={image} />
		</StyledImageContainer>
		<div className="flex flex-col z-20 justify-end p-3 md:p-4 absolute top-0 left-0 h-full w-full">
			<div>
				{tags &&
					tags.map((tag, index) => {
						return (
							<span
								key={index}
								className="text-gray-300 inline-block mr-2 text-base mb-2 font-sans"
							>
								{tag}
							</span>
						)
					})}
			</div>
			<h2 className="font-sans text-white text-2xl md:text-3xl font-semibold mb-2">
				{title}
			</h2>
		</div>
	</Link>
)

const StyledImageContainer = styled.div`
	&:after {
		content: '';
		${tw`absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-black opacity-50`}
	}
`

ArticleImageThumbnail.propTypes = {
	title: PropTypes.string.isRequired,
	image: PropTypes.object.isRequired,
}

export default ArticleImageThumbnail
