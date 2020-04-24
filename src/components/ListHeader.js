import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const ListHeader = ({ title, colorscheme, ...props }) => {
	return (
		<header className="inline-flex items-center">
			<span className="h-1 w-6 block bg-green-500 rounded-tr rounded-br mr-3" />
			<StyledTitle>{title}</StyledTitle>
		</header>
	)
}

const StyledTitle = styled.span`
	${({ colorscheme }) => {
		switch (colorscheme) {
			case 'white':
				return tw`text-white`
			default:
				return tw`text-black`
		}
	}}

	${tw`font-medium`}
`

ListHeader.propTypes = {
	title: PropTypes.string.isRequired,
	colorscheme: PropTypes.string,
}

export default ListHeader
