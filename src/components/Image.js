import React from 'react'
import Img from 'gatsby-image'

const Image = ({ ...props }) => {
	if (props.fluid || props.fixed) {
		return <Img {...props} />
	}

	return (
		<img
			alt="Placeholder"
			src="https://image.posterlounge.se/img/products/630000/628588/628588_poster_l.jpg"
		/>
	)
}

export default Image
