import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash.get'

import Quote from './Quote'

const QuoteContainer = ({ slice }) => {
	if (!slice.primary) {
		return null
	}

	const { primary } = slice

	const linkType = get(primary, 'quote._linkType', '')
	const quote = get(primary, 'quote_text', null)
	const byline = get(primary, 'quote_byline', null)
	const buttonLabel = get(primary, 'quote_button_label', '')
	const image = get(primary, 'quote_imageSharp.childImageSharp.fluid', null)
	const meta = get(primary, 'quote_link._meta', {})
	const url = get(primary, 'quote_link.url', '')

	return (
		<Quote
			quote={quote}
			byline={byline}
			linkType={linkType}
			buttonLabel={buttonLabel}
			image={image}
			meta={meta}
			url={url}
		/>
	)
}

QuoteContainer.propTypes = {
	slice: PropTypes.object.isRequired,
}

export default QuoteContainer
