import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Container from '../Container'
import TextRenderer from '../TextRenderer'

const SectionHeaderLine = ({ title }) => {
	return (
		<Container tight>
			<div className="flex items-center px-4 md:px-6">
				<TitleContainer>
					<TextRenderer text={title} />
				</TitleContainer>
				<hr className="h-1 rounded-tr rounded-br w-full border-none outline-none flex-1 bg-green-500" />
			</div>
		</Container>
	)
}

const TitleContainer = styled.div`
	${tw`font-sans mr-6`};
	> h1 {
		${tw`font-bold text-2xl md:text-3xl text-black`};
	}
	> h2 {
		${tw`font-bold text-2xl md:text-3xl text-black`};
		& > a {
			${tw`underline`}
		}
	}
	> h3 {
		${tw`font-bold text-xl md:text-2xl text-black`};
		& > a {
			${tw`underline`}
		}
	}
	> h4 {
		${tw`font-bold text-lg md:text-xl text-black`};
		& > a {
			${tw`underline`}
		}
	}
	> h5 {
		${tw`font-bold text-base md:text-lg text-black`};
		& > a {
			${tw`underline`}
		}
	}
	> h6 {
		${tw`font-medium text-base text-black`};
		& > a {
			${tw`underline`}
		}
	}
`

SectionHeaderLine.propTypes = {
	title: PropTypes.object.isRequired,
}

export default SectionHeaderLine
