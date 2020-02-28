import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const ArrowLeft = ({ ...props }) => {
	return (
		<StyledSvg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			{...props}
		>
			<path
				d="M23.25 12H0.75"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M11.25 1.5L0.75 12L11.25 22.5"
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

export default ArrowLeft
