import React from 'react'
import Img from 'gatsby-image'

const Image = ({ ...props }) => {
	if (props.fluid || props.fixed) {
		return <Img {...props} />
	}

	return (
		<div>
			<img src="https://image.posterlounge.se/img/products/630000/628588/628588_poster_l.jpg" />
			<small>Photo by Albin Martinsson</small>
		</div>
	)
}

export default Image
