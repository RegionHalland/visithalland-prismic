import PropTypes from 'prop-types'
import React from 'react'

import Image from './Image'

const Author = ({ name, role, email, phone, image, ...props }) => (
	<div {...props}>
		<Image
			className="w-full h-full"
			fluid={image}
			alt={`Bild på ${name}`}
		/>
		<div>{name}</div>
		<div>{role}</div>
		<div>{email}</div>
		<div>{phone}</div>
	</div>
)

Author.defaultProps = {
	name: '',
	role: '',
	email: '',
	phone: '',
	image: null,
}

Author.propTypes = {
	name: PropTypes.string,
	role: PropTypes.string,
	email: PropTypes.string,
	phone: PropTypes.string,
	image: PropTypes.object,
}

export default Author
