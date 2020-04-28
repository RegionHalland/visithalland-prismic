import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash.get'

import Quote from './Quote'

const QuoteContainer = ({ slice }) => {
	if (!slice.primary) {
		return null
	}

	const { primary } = slice

	const quote = get(primary, 'quote_text', null)
	const byline = get(primary, 'quote_byline', null)
	const buttonLabel = get(primary, 'quote_button_label', '')
	const image = get(primary, 'quote_imageSharp.childImageSharp.fluid', null)
	const copyright = get(primary, 'quote_image.copyright', null)
	const alt = get(primary, 'quote_image.alt', null)
	const meta = get(primary, 'quote_link._meta', {})
	const url = get(primary, 'quote_link.url', '')

	return (
		<div className="py-8">
			<Quote
				quote={quote}
				byline={byline}
				buttonLabel={buttonLabel}
				image={image}
				copyright={copyright}
				alt={alt}
				meta={meta}
				url={url}
			/>
		</div>
	)
}

QuoteContainer.propTypes = {
	slice: PropTypes.object.isRequired,
}

export default QuoteContainer
