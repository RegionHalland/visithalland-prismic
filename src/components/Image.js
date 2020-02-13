import React from 'react'
import Img from 'gatsby-image'

const Image = ({ ...props }) => {
	if (props.fluid || props.fixed) {
		return <Img {...props} />
	}

	return (
		<img
			alt="Placeholder"
			src="https://static4.businessinsider.com/image/55266e1869bedda02c4a0b93-538/pygmy-marmoset.jpg"
		/>
	)
}

export default Image
