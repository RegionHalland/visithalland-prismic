import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { useTransition, animated, config } from 'react-spring'

import ArrowRightIcon from './icons/ArrowRightIcon'
import LinkIcon from './icons/LinkIcon'

const FancyLink = ({
	title,
	onClick,
	active,
	colorscheme,
	size,
	external,
	...props
}) => {
	const transitions = useTransition(active, null, {
		from: { opacity: 0, transform: 'translateX(-100%)' },
		enter: { opacity: 1, transform: 'translateX(0%)' },
		leave: { opacity: 0, transform: 'translateX(100%)' },
		initial: null,
		config: config.stiff,
	})
	return (
		<StyledLink className="focus:outline-none" onClick={onClick} {...props}>
			<StyledIconContainer className="h-6 w-6 flex mr-2 items-center justify-center rounded-full bg-green-500">
				{transitions.map(({ item, key, props }) =>
					item ? (
						<AnimationContainer style={props} key={key}>
							{external ? (
								<LinkIcon className="text-green-200 h-3 w-3" />
							) : (
								<ArrowRightIcon className="text-green-200 h-2 w-2" />
							)}
						</AnimationContainer>
					) : (
						<AnimationContainer style={props} key={key}>
							{external ? (
								<LinkIcon className="text-green-200 h-3 w-3" />
							) : (
								<ArrowRightIcon className="text-green-200 h-2 w-2" />
							)}
						</AnimationContainer>
					),
				)}
			</StyledIconContainer>
			<StyledTitle size={size} colorscheme={colorscheme}>
				{title}
			</StyledTitle>
		</StyledLink>
	)
}

const StyledTitle = styled.span`
	${({ colorscheme }) => {
		switch (colorscheme) {
			case 'white':
				return tw`text-white`
			default:
				return tw`text-black`
		}
	}}

	${({ size }) => {
		switch (size) {
			case 'large':
				return tw`text-lg`
			default:
				return tw`text-sm md:text-base`
		}
	}}
	${tw`flex-1 text-left leading-tight`};
	transition: transform 0.25s, opacity 0.25s;
`

const StyledIconContainer = styled.span`
	${tw`h-5 w-5 md:h-6 md:w-6 bg-green-500 relative overflow-hidden`};
`

const StyledAnimationContainer = styled.div`
	${tw`absolute h-full w-full flex items-center justify-center`};
`

const AnimationContainer = animated(StyledAnimationContainer)

const StyledLink = styled.button`
	${tw`relative focus:outline-none font-medium inline-flex items-center`};
`

FancyLink.propTypes = {
	title: PropTypes.string.isRequired,
	external: PropTypes.string,
	colorscheme: PropTypes.string,
	size: PropTypes.string,
	onClick: PropTypes.func,
	active: PropTypes.bool,
}

export default FancyLink
