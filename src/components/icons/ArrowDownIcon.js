import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const ArrowDownIcon = ({ ...props }) => {
    return (
        <StyledSvg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 25"
            fill="none"
            {...props}
        >
            <path d="M22.334 10.127a2.6 2.6 0 00-3.689-.066l-3.716 3.872a.25.25 0 01-.43-.173V2.139A2.277 2.277 0 0012 .099c-.817 0-2.516.45-2.5 2v11.682a.251.251 0 01-.427.177l-3.74-3.73a2.616 2.616 0 00-3.66.1 2.6 2.6 0 00-.1 3.659l9.717 9.623c.186.185.438.29.7.289H12a.993.993 0 00.705-.3l9.7-9.791a2.61 2.61 0 00-.07-3.681z"></path>
        </StyledSvg>
    )
}

const StyledSvg = styled.svg`
    ${tw`fill-current`}
`

export default ArrowDownIcon
