import PropTypes from 'prop-types'
import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Author = ({ name, role, email, phone, image, ...props }) => (
	<StyledAddress {...props}>
		<div className="h-16 w-16 inline-block bg-gray-300 mb-1 rounded-full overflow-hidden">
			<Img
				className="w-full h-full"
				fluid={image}
				alt={`Bild på ${name}`}
			/>
		</div>
		<span className="text-base font-semibold block">{name}</span>
		<span className="text-sm font-normal block">{role}</span>
	</StyledAddress>
)

const StyledAddress = styled.address`
	${tw`font-sans not-italic inline-block`}
`

Author.propTypes = {
	name: PropTypes.string.isRequired,
	role: PropTypes.string.isRequired,
	email: PropTypes.string,
	phone: PropTypes.string,
	image: PropTypes.object.isRequired,
}

export default Author
