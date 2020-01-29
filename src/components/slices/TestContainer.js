import React from 'react'
import Test from './Test'

const TestContainer = ({ slice }) => {
	if (!slice.primary) {
		return null
	}

	return <Test title={slice.primary.test_title[0].text} />
}

export default TestContainer
