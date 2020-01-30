import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import TextRenderer from '../TextRenderer'

const Text = ({ text }) => {
	return (
		<RichTextContainer>
			<TextRenderer text={text} />
		</RichTextContainer>
	)
}

const RichTextContainer = styled.div`
	${tw`font-sans`};

	> h1 {
		${tw`font-bold text-2xl md:text-3xl mt-4 mb-4 md:mb-6 text-black`};
	}

	> h2 {
		${tw`font-bold text-2xl md:text-3xl mt-4 mb-4 md:mb-6 text-black`};
	}

	> h3 {
		${tw`font-bold text-xl md:text-2xl mt-3 mb-3 md:mb-5 text-black`};
	}

	> h4 {
		${tw`font-semibold text-lg md:text-xl mt-2 mb-3 md:mb-5 text-black`};
	}

	> h5 {
		${tw`font-semibold text-base md:text-lg mt-1 mb-2 md:mb-4 text-black`};
	}

	> h6 {
		${tw`font-semibold text-base mt-1 mb-1 md:mb-3 text-black`};
	}

	> p {
		${tw`text-gray-700 text-base leading-relaxed mb-8`};

		& > strong {
			${tw`font-semibold`}
		}

		& > em {
			${tw`font-italic text-black`}
		}

		& > a {
			${tw`font-semibold text-black underline`}
		}
	}

	> img {
		${tw`w-full h-auto mb-6`};
	}

	> blockquote {
		${tw`my-12 text-center max-w-xl mx-auto`};

		p {
			${tw`font-semibold text-xl md:text-2xl my-6`};
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
	text: propTypes.arrayOf(propTypes.object).isRequired,
}

export default Text
