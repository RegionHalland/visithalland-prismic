import PropTypes from 'prop-types'
import React from 'react'
import Link from 'gatsby-link'

import styled from 'styled-components'
import tw from 'tailwind.macro'

const Button = ({ title, url, to, onClick, ...props }) => {
	if (onClick)
		return (
			<StyledButton onClick={onClick} {...props}>
				{title}
			</StyledButton>
		)

	if (url)
		return (
			<StyledHref href={url} {...props}>
				{title}
			</StyledHref>
		)
	return (
		<StyledLink to={to} {...props}>
			{title}
		</StyledLink>
	)
}

const StyledLink = styled(Link)`
	${({ colorscheme }) => {
		switch (colorscheme) {
			case 'green':
				return tw`bg-green-500 hover:bg-green-600 active:bg-green-500 focus:bg-blue-500 text-white`
			default:
				return tw`bg-blue-700 hover:bg-blue-600 active:bg-blue-600 focus:bg-blue-600 text-white`
		}
	}}

	${tw`inline-block rounded-full text-base lg:text-lg focus:outline-none px-8 font-sans py-4`};

	&:disabled {
		${tw`text-white bg-gray-500 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-400`};
	}
`

const StyledHref = styled.a`
	${({ colorscheme }) => {
		switch (colorscheme) {
			case 'green':
				return tw`bg-green-500 hover:bg-green-600 active:bg-green-500 focus:bg-blue-500 text-white`
			default:
				return tw`bg-blue-700 hover:bg-blue-600 active:bg-blue-600 focus:bg-blue-600 text-white`
		}
	}}

	${tw`inline-block rounded-full text-base lg:text-lg focus:outline-none px-8 font-sans py-4`};

	&:disabled {
		${tw`text-white bg-gray-500 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-400`};
	}
`

const StyledButton = styled.button`
	${({ colorscheme }) => {
		switch (colorscheme) {
			case 'green':
				return tw`bg-green-500 hover:bg-green-600 active:bg-green-500 focus:bg-blue-500 text-white`
			default:
				return tw`bg-blue-700 hover:bg-blue-600 active:bg-blue-600 focus:bg-blue-600 text-white`
		}
	}}

	${tw`inline-block rounded-full text-base lg:text-lg focus:outline-none px-8 font-sans py-4`};

	&:disabled {
		${tw`text-white bg-gray-500 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-400`};
	}
`

Button.propTypes = {
	title: PropTypes.string.isRequired,
}

export default Button
