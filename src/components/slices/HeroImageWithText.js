import React from 'react'
import Img from 'gatsby-image'

const HeroImageWithText = ({ slice }) => {
	console.log(slice)
	if (!slice.primary) {
		return null
	}
	console.log(slice.primary)

	const {
		hero_image_with_text_title: title,
		hero_image_with_text_imgSharp: {
			childImageSharp: { fluid },
		},
	} = slice.primary

	return (
		<div className="border p-3">
			<div className="text-xs mb-2">(type: {slice.type})</div>
			<h1>{title}</h1>
			<Img fluid={fluid} alt="hahahahahaha" />
		</div>
	)
}

export default HeroImageWithText
