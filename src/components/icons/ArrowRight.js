import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const ArrowRight = ({ ...props }) => {
	return (
		<StyledSvg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			{...props}
		>
			<path
				d="M0.75 12H23.25"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12.75 22.5L23.25 12L12.75 1.5"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</StyledSvg>
	)
}

const StyledSvg = styled.svg`
	${tw`stroke-current`}
`

export default ArrowRight
