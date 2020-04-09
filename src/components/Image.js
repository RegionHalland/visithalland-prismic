import React from 'react'
import Img from 'gatsby-image'

const Image = ({ ...props }) => {
	if (props.fluid || props.fixed) {
		return (
			<div>
				<Img {...props} />
				<div className="absolute z-50 bottom-0 mb-4 mr-4 rounded-full right-0 text-white text-xs px-4 py-2 bg-blue-600">
					{props.copyright}
				</div>
			</div>
		)
	}

	return (
		<div
			alt="Placeholder"
			src="https://static4.businessinsider.com/image/55266e1869bedda02c4a0b93-538/pygmy-marmoset.jpg"
		/>
	)
}

export default Image
