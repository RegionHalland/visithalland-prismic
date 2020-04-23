import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const ArrowLeftIcon = ({ ...props }) => {
	return (
		<StyledSvg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			{...props}
		>
			<path d="M21.864 9.5H10.257a.25.25 0 01-.174-.43l3.864-3.721a2.609 2.609 0 00-.075-3.682 2.612 2.612 0 00-3.68-.077L.4 11.289A1 1 0 00.392 12.7l9.625 9.724a2.66 2.66 0 003.755-3.757l-3.73-3.733a.25.25 0 01.178-.427h11.673c1.556 0 2-1.675 2-2.51a2.28 2.28 0 00-2.03-2.497z"></path>
		</StyledSvg>
	)
}

const StyledSvg = styled.svg`
	${tw`fill-current`}
`

export default ArrowLeftIcon
