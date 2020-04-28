import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash.get'

import Text from './Text'

const TextContainer = ({ slice }) => {
	const { primary } = slice

	if (!primary) {
		return null
	}

	const text = get(primary, 'text', null)

	return (
		<div className="py-5">
			<Text text={text} />
		</div>
	)
}

TextContainer.propTypes = {
	slice: PropTypes.object.isRequired,
}

export default TextContainer
