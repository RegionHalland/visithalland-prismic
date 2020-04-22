import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import TextRenderer from '../TextRenderer'
import Container from '../Container'
import ArrowDown from '../icons/ArrowDown'

const SectionHeaderLeftAligned = ({ title, body }) => {
	return (
		<Container>
			<div className="flex items-center px-4 md:px-6">
				<div className="flex flex-1 flex-col">
					<TitleContainer>
						<TextRenderer text={title} />
					</TitleContainer>
					<div className="text-gray-600 w-12/12 md:w-6/12">
						<TextRenderer text={body} />
					</div>
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
		${tw`font-semibold text-2xl md:text-3xl mb-4 md:mb-4 text-black relative pb-4`};
	}
	h2:after {
		${tw`absolute w-6 border-solid border-b-4 border-green-600 bottom-0 left-0`};
		content: '';
	}
	h3 {
		${tw`font-semibold text-xl md:text-2xl mt-10 mb-3 md:mb-5 text-black`};
	}
	h3:after {
		${tw`absolute w-6 border-solid border-b-4 border-green-600 bottom-0 left-0`};
		content: '';
	}
	h4 {
		${tw`relative font-semibold text-lg md:text-xl mt-10 mb-3 md:mb-5 text-black`};
	}
	h4:after {
		${tw`absolute w-6 border-solid border-b-4 border-green-600 bottom-0 left-0`};
		content: '';
	}
	h5 {
		${tw`font-semibold text-base md:text-lg mt-6 mb-2 md:mb-4 text-black`};
	}
	h5:after {
		${tw`absolute w-6 border-solid border-b-4 border-green-600 bottom-0 left-0`};
		content: '';
	}
	h6 {
		${tw`font-semibold text-base mt-6 mb-2 md:mb-3 text-black`};
	}
	h6:after {
		${tw`absolute w-6 border-solid border-b-4 border-green-600 bottom-0 left-0`};
		content: '';
	}
`

SectionHeaderLeftAligned.propTypes = {
	title: PropTypes.object.isRequired,
	body: PropTypes.object,
}

export default SectionHeaderLeftAligned
