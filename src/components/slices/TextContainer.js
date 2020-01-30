import React from 'react'
import Text from './Text'

const TextContainer = ({ slice, meta }) => {
	if (!slice.primary) {
		return null
	}

	return <Text text={slice.primary.text} />
}

export default TextContainer
