import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const NavItem = ({ title, active, onClick }) => (
	<Button active={active} onClick={onClick}>
		{title}
	</Button>
)

const Button = styled.button`
	transition: color 0.2s ease-in-out;
	${tw`text-sm md:text-base leading-none font-medium hover:text-white focus:outline-none mr-6`};
	${({ active }) => (active ? tw`text-white` : tw`text-gray-500`)};
`

export default NavItem
