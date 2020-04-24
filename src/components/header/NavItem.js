import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../tailwind.config.js'

const config = resolveConfig(tailwindConfig)

const NavItem = ({ title, active, onClick }) => (
	<Button active={active} onClick={onClick}>
		{title}
	</Button>
)

const Button = styled.button`
	transition: color 0.2s ease-in-out;
	${tw`relative leading-none font-medium hover:text-white focus:text-white focus:outline-none mr-6`};
	${({ active }) => (active ? tw`text-white` : tw`text-gray-500`)};

	&:after {
		content: '';
		transition: transform 0.2s ease-in-out;
		transform: ${({ active }) =>
			active ? 'translateY(10px) scale(1)' : 'translateY(10px) scale(0)'};
		${tw`block absolute left-0 right-0 bottom-0 mx-auto bg-white rounded-full w-1 h-1`};
	}

	@media (min-width: ${config.theme.screens.lg}) {
		&:after {
			transform: ${({ active }) =>
				active
					? 'translateY(16px) scale(1)'
					: 'translateY(16px) scale(0)'};
			${tw`w-2 h-2`};
		}
	}
`

export default NavItem
