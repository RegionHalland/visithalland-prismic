import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const ArrowDown = ({ ...props }) => {
    return (
        <StyledSvg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 25"
            fill="none"
            {...props}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 .75v22.5M1.5 12.75L12 23.25l10.5-10.5"
            ></path>
        </StyledSvg>
    )
}

const StyledSvg = styled.svg`
    ${tw`stroke-current`}
`

export default ArrowDown
