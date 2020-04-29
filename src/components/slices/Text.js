import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import TextRenderer from '../TextRenderer'
import Container from '../Container'

const Text = ({ text }) => (
	<Container tight>
		<RichTextContainer>
			<TextRenderer text={text} />
		</RichTextContainer>
	</Container>
)

const RichTextContainer = styled.div`
	${tw`font-sans px-4 md:px-6`};
	> h1 {
		${tw`font-bold text-2xl md:text-3xl mt-10 mb-4 md:mb-4 text-black`};
		& > a {
			${tw`underline`}
		}
	}
	> h2 {
		${tw`font-bold text-2xl md:text-3xl mt-10 mb-3 md:mb-3 text-black`};
		& > a {
			${tw`underline`}
		}
	}
	> h3 {
		${tw`font-bold text-xl md:text-2xl mt-10 mb-3 md:mb-3 text-black`};
		& > a {
			${tw`underline`}
		}
	}
	> h4 {
		${tw`font-bold text-lg md:text-xl mt-10 mb-3 md:mb-3 text-black`};
		& > a {
			${tw`underline`}
		}
	}
	> h5 {
		${tw`font-bold text-base md:text-lg mt-6 mb-2 md:mb-3 text-black`};
		& > a {
			${tw`underline`}
		}
	}
	> h6 {
		${tw`font-medium text-base mt-6 mb-2 md:mb-3 text-black`};
		& > a {
			${tw`underline`}
		}
	}
	> p {
		${tw`text-gray-700 text-base md:text-lg leading-relaxed mb-6`};
		& > strong {
			${tw`font-medium`}
		}
		& > em {
			${tw`font-italic text-black`}
		}
		& > a {
			${tw`font-medium text-black underline`}
		}
	}
	> img {
		${tw`w-full h-auto mb-6`};
	}
	> blockquote {
		${tw`my-12 text-center max-w-xl mx-auto`};
		p {
			${tw`font-medium text-xl md:text-2xl my-6`};
		}
		cite {
			${tw`text-gray-500 not-italic`};
		}
	}
	> figure {
		${tw`mt-12`};
		figcaption {
			${tw`text-gray-600 my-2 text-sm`};
		}
	}
`

Text.propTypes = {
	text: PropTypes.array,
}

export default Text
