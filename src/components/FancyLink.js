import PropTypes from 'prop-types'
import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import ArrowRightIcon from './icons/ArrowRightIcon'

const FancyLink = ({ title, url, to, onClick, active, ...props }) => {
	return (
		<StyledLink className="focus:outline-none" onClick={onClick} {...props}>
			<StyledTitle>{title}</StyledTitle>
			<StyledIcon className="h-6 w-6 mr-2 flex items-center justify-center rounded-full bg-green-500">
				<StyledIconComponent
					height={10}
					width={10}
					className="text-green-200"
				/>
			</StyledIcon>
		</StyledLink>
	)
}

const StyledTitle = styled.span`
	${tw`block`};
	transition: transform 0.25s, opacity 0.25s;
`
const StyledIcon = styled.span`
	${tw`h-6 w-6 bg-green-500`};
`

const StyledLink = styled.button`
	${tw`relative focus:outline-none font-medium inline-flex`};
`

const StyledIconComponent = styled(ArrowRightIcon)``

FancyLink.propTypes = {
	title: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	active: PropTypes.func,
	onMouseLeave: PropTypes.func,
}

export default FancyLink
