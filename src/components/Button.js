import PropTypes from 'prop-types'
import React from 'react'

import styled from 'styled-components'
import tw from 'tailwind.macro'

const Button = ({ title, loading, ...props }) => (
	<StyledButton {...props}>{title}</StyledButton>
)

const StyledButton = styled.button`
	${tw`bg-blue-700 text-base lg:text-lg focus:outline-none hover:bg-blue-600 active:bg-blue-600 focus:bg-blue-600 px-8 font-sans py-4 text-white transition-bg transition-250`};
	&:disabled {
		${tw`bg-gray-500 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-400`};
	}
`

Button.propTypes = {
	title: PropTypes.string.isRequired,
	loading: PropTypes.bool,
}

export default Button
