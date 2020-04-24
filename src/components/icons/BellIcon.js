import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const BellIcon = ({ ...props }) => {
    return (
        <StyledSvg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 25"
            fill="none"
            {...props}
        >
            <path d="M21 17.5a1.5 1.5 0 01-1.5-1.5v-4.862A7.957 7.957 0 0013 3.073V1a1 1 0 10-2 0v2.073a7.957 7.957 0 00-6.5 8.065V16A1.5 1.5 0 013 17.5a1 1 0 100 2h18a1 1 0 100-2zM14.236 21H9.764a.25.25 0 00-.248.222 2.5 2.5 0 104.968 0 .248.248 0 00-.248-.222z"></path>
        </StyledSvg>
    )
}

const StyledSvg = styled.svg`
    ${tw`fill-current`}
`

export default BellIcon
