import PropTypes from 'prop-types'
import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import Localize, { useLocalize } from './Localize'

const Button = ({ title, url, to, onClick, colorscheme, size, ...props }) => {
	const titleString = useLocalize(title)

	if (onClick)
		return (
			<button className="focus:outline-none" onClick={onClick} {...props}>
				<StyledButton
					size={size}
					data-title={titleString}
					colorscheme={colorscheme}
				>
					<StyledTitle>
						<Localize text={title} />
					</StyledTitle>
				</StyledButton>
			</button>
		)

	if (url)
		return (
			<a className="focus:outline-none" href={url} {...props}>
				<StyledButton
					size={size}
					data-title={titleString}
					colorscheme={colorscheme}
				>
					<StyledTitle>
						<Localize text={title} />
					</StyledTitle>
				</StyledButton>
			</a>
		)

	if (!url && !to)
		return (
			<StyledButton
				size={size}
				data-title={titleString}
				colorscheme={colorscheme}
			>
				<StyledTitle>
					<Localize text={title} />
				</StyledTitle>
			</StyledButton>
		)
	return (
		<Link className="focus:outline-none" to={to} {...props}>
			<StyledButton
				size={size}
				data-title={titleString}
				colorscheme={colorscheme}
			>
				<StyledTitle>
					<Localize text={title} />
				</StyledTitle>
			</StyledButton>
		</Link>
	)
}

const StyledTitle = styled.span`
	${tw`block`};
	transition: transform 0.25s, opacity 0.25s;
`

const StyledButton = styled.div`
	${({ colorscheme }) => {
		switch (colorscheme) {
			case 'green':
				return tw`bg-green-600 hover:bg-green-500 active:bg-green-500 focus:bg-blue-500 text-white`
			default:
				return tw`bg-blue-700 hover:bg-blue-600 active:bg-blue-600 focus:bg-blue-600 text-white`
		}
	}}
	${({ size }) => {
		switch (size) {
			case 'large':
				return tw`text-base md:text-base px-6 md:px-8 py-4 md:py-5`
			default:
				return tw` text-sm md:text-base px-6 md:px-6 py-3 md:py-3`
		}
	}}
	${tw`relative inline-block overflow-hidden rounded-full focus:outline-none font-medium`};
	transition: background 0.25s;
	&:before {
		content: attr(data-title);
		${tw`absolute text-center w-full h-full flex items-center justify-center`}
		transform: translate(-50%, -150%);
		opacity: 0;
		top: 50%;
		left: 50%;
		transition: transform 0.25s, opacity 0.25s;
	}

	&:hover {
		${StyledTitle} {
			transform: translateY(150%);
			opacity: 0;
		}

		&:before {
			transform: translate(-50%, -50%);
			opacity: 1;
		}
	}
`

Button.propTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string,
	to: PropTypes.string,
	colorscheme: PropTypes.string,
	size: PropTypes.string,
	onClick: PropTypes.func,
}

export default Button
