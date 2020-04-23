import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const ArrowUpIcon = ({ ...props }) => {
    return (
        <StyledSvg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 25"
            fill="none"
            {...props}
        >
            <path d="M22.41 10.2L12.706.4A.99.99 0 0011.3.39l-9.727 9.63a2.6 2.6 0 00.1 3.657 2.59 2.59 0 003.657.1l3.743-3.732a.25.25 0 01.426.178V21.89C9.483 23.45 11.164 23.9 12 23.9a2.276 2.276 0 002.5-2.034V10.241a.25.25 0 01.431-.173l3.722 3.881A2.658 2.658 0 0022.41 10.2z"></path>
        </StyledSvg>
    )
}

const StyledSvg = styled.svg`
    ${tw`fill-current`}
`

export default ArrowUpIcon
