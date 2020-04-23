import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import Image from './Image'

const Author = ({ name, role, email, phone, image, colorscheme, ...props }) => (
	<Container colorscheme={colorscheme} {...props}>
		<div className="flex items-center">
			<div className="h-16 w-16 mr-4 bg-gray-200 overflow-hidden rounded-full relative">
				<Image
					style={{ position: 'absolute' }}
					className="h-full w-full bottom-0 top-0 left-0 z-0"
					objectFit="cover"
					objectPosition="50% 50%"
					fluid={image}
					alt={`Bild på ${name}`}
				/>
			</div>
			<div>
				<span className="font-medium text-base block">{name}</span>
				<div className="text-sm opacity-50 block">{role}</div>
			</div>
		</div>
	</Container>
)

const Container = styled.div`
	${({ colorscheme }) => {
		switch (colorscheme) {
			case 'white':
				return tw`text-white`
			default:
				return tw`text-black`
		}
	}}
`

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
