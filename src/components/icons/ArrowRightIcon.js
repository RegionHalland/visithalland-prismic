import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const ArrowRightIcon = ({ ...props }) => {
	return (
		<StyledSvg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			{...props}
		>
			<path d="M23.6 11.29l-9.793-9.7a2.607 2.607 0 00-3.679.074 2.638 2.638 0 00-.068 3.69l3.871 3.713a.25.25 0 01-.173.43H2.135A2.28 2.28 0 00.1 12c0 .815.448 2.51 2 2.51h11.679a.25.25 0 01.177.427l-3.731 3.733a2.66 2.66 0 003.758 3.754l9.625-9.72a1 1 0 00-.008-1.415z"></path>
		</StyledSvg>
	)
}

const StyledSvg = styled.svg`
	${tw`fill-current`}
`

export default ArrowRightIcon
