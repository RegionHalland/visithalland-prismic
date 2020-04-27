import PropTypes from 'prop-types'
import React from 'react'

import styled from 'styled-components'
import tw from 'tailwind.macro'

const IconButton = ({ icon, onClick, colorscheme, ...props }) => {
	return (
		<StyledButton
			colorscheme={colorscheme}
			className="focus:outline-none"
			onClick={onClick}
			{...props}
		>
			<StyledIcon>{icon}</StyledIcon>
			<GhostIcon>{icon}</GhostIcon>
		</StyledButton>
	)
}

const StyledIcon = styled.div`
	transition: transform 0.25s, opacity 0.25s;
`

const GhostIcon = styled.div`
	${tw`absolute top-0 left-0 h-full w-full flex items-center justify-center`}
	transform:translateY(-100%);
	opacity: 0;
	transition: transform 0.25s, opacity 0.25s;
`

const StyledButton = styled.div`
	${({ colorscheme }) => {
		switch (colorscheme) {
			case 'green':
				return tw`bg-green-600 hover:bg-green-500 active:bg-green-500 focus:bg-blue-500 text-white`
			default:
				return tw`bg-blue-700 hover:bg-blue-600 active:bg-blue-600 focus:bg-blue-600 text-white`
		}
	}}
	${tw`relative flex items-center justify-center overflow-hidden rounded-full focus:outline-none h-10 w-10 cursor-pointer`};

	&:hover {
		${StyledIcon} {
			transform: translateY(150%);
			opacity: 0;
		}
		${GhostIcon} {
			transform: translateY(0%);
			opacity: 1;
		}
	}
	transition: background 0.25s;
`

IconButton.propTypes = {
	icon: PropTypes.element,
	colorscheme: PropTypes.string,
	onClick: PropTypes.func.isRequired,
}

export default IconButton
