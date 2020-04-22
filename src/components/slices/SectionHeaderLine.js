import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import TextRenderer from '../TextRenderer'
import Container from '../Container'

const SectionHeaderLine = ({ title, body }) => {
	return (
		<Container className="flex content-center items-center px-4 md:px-6">
			<TitleContainer>
				<TextRenderer text={title} />
			</TitleContainer>
			<div className="flex-grow bg-green-600 h-1"></div>
		</Container>
	)
}

const TitleContainer = styled.div`
	${tw`font-sans pr-6 flex-grow-0`};
	h2 {
		${tw`font-semibold text-2xl md:text-3xl text-black`};
	}
	h3 {
		${tw`font-semibold text-xl md:text-2xl text-black`};
	}
	h4 {
		${tw`font-semibold text-lg md:text-xl text-black`};
	}
	h5 {
		${tw`font-semibold text-base md:text-lg text-black`};
	}
	h6 {
		${tw`font-semibold text-base text-black`};
	}
`

SectionHeaderLine.propTypes = {
	title: PropTypes.object.isRequired,
	body: PropTypes.object,
}

export default SectionHeaderLine
