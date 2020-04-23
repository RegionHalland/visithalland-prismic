import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import TextRenderer from '../TextRenderer'
import Container from '../Container'
import ArrowDown from '../icons/ArrowDown'

const SectionHeaderCentered = ({ title, body }) => {
	return (
		<Container>
			<div className="text-center flex items-center mx-auto flex-col px-4 md:px-6 md:w-6/12">
				<TitleContainer>
					<TextRenderer text={title} />
				</TitleContainer>
				<div className="bg-green-600 w-6 h-1 mb-4"></div>
				<div className="text-gray-600 mb-6">
					<TextRenderer text={body} />
				</div>
				<div className="h-16 w-10 mx-auto rounded-full bg-green-600 flex items-center justify-center">
					<ArrowDown height={16} width={16} className="text-white" />
				</div>
			</div>
		</Container>
	)
}

const TitleContainer = styled.div`
	${tw`font-sans`};
	h2 {
		${tw`font-semibold text-2xl md:text-3xl mt-10 mb-4 md:mb-4 text-black`};
	}
	h3 {
		${tw`font-semibold text-xl md:text-2xl mt-10 mb-3 md:mb-5 text-black`};
	}
	h4 {
		${tw`font-semibold text-lg md:text-xl mt-10 mb-3 md:mb-5 text-black`};
	}
	h5 {
		${tw`font-semibold text-base md:text-lg mt-6 mb-2 md:mb-4 text-black`};
	}
	h6 {
		${tw`font-semibold text-base mt-6 mb-2 md:mb-3 text-black`};
	}
`

SectionHeaderCentered.propTypes = {
	title: PropTypes.object.isRequired,
	body: PropTypes.object,
}

export default SectionHeaderCentered
