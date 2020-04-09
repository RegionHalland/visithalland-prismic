import PropTypes from 'prop-types'
import React from 'react'

import Image from './Image'

const Author = ({ name, role, email, phone, image, ...props }) => (
	<div {...props}>
		<div className="flex items-center">
			<div className="h-16 w-16 mr-2 border-coral-500 border-4 overflow-hidden rounded-full relative">
				<Image
					style={{ position: 'absolute' }}
					className="h-full w-full bottom-0 top-0 left-0 z-0"
					objectFit="cover"
					objectPosition="50% 50%"
					fluid={image}
					alt={`Bild på ${name}`}
				/>
			</div>
			<div className="">
				<span className="font-semibold block mb-1">{name}</span>
				<div className="text-sm opacity-75 block">{role}</div>
			</div>
		</div>
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
