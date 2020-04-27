import PropTypes from 'prop-types'
import React from 'react'
import styled, { keyframes } from 'styled-components'
import tw from 'tailwind.macro'

import ArrowDownIcon from './icons/ArrowDownIcon'

const ScrollIndicator = ({ colorscheme, ...props }) => {
	return (
		<StyledIndicator colorscheme={colorscheme} {...props}>
			<StyledIcon className="text-green-200 h-3 md:h-3 w-3 md:w-3" />
		</StyledIndicator>
	)
}

const IndicatorAnimation = keyframes`
	0% {
		transform: translateY(-300%);
		opacity:0;
	}

	50% {
		transform: translateY(0%);
		opacity:1;
	}

	100% {
		transform: translateY(300%);
		opacity:0;
	}
`

const StyledIndicator = styled.div`
	${({ colorscheme }) => {
		switch (colorscheme) {
			case 'green':
				return tw`bg-green-600 text-white`
			default:
				return tw`bg-blue-700 text-white`
		}
	}}
	${tw`relative flex items-center justify-center overflow-hidden rounded-full h-12 md:h-16 w-8 md:w-10`};
`

const StyledIcon = styled(ArrowDownIcon)`
	animation: ${IndicatorAnimation} 3.25s infinite
		cubic-bezier(0.16, 1, 0.3, 1);
`

ScrollIndicator.propTypes = {
	colorscheme: PropTypes.string,
}

export default ScrollIndicator
