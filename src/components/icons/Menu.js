import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Menu = ({ ...props }) => {
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
                d="M2.25 18.003h19.5M2.25 12.003h19.5M2.25 6.003h19.5"
            ></path>
        </StyledSvg>
    )
}

const StyledSvg = styled.svg`
    ${tw`stroke-current`}
`

export default Menu
