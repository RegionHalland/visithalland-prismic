import React from 'react'
import propTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../utils/linkResolver'

const TextRenderer = ({ text }) => (
	<RichText
		render={text}
		htmlSerializer={htmlSerializer}
		linkResolver={linkResolver}
	/>
)

// htmlSerializer customizes HTML output
// https://prismic.io/docs/reactjs/beyond-the-api/html-serializer
const htmlSerializer = (type, element, content, children, key) => {
	let props = {}

	if (type === 'image') {
		// Don't wrap images in a <p> tag
		props = { src: element.url, alt: element.alt || '' }
		return React.createElement('img', Object.assign(props || {}, { key }))
	}

	// Return null to stick with the default behavior
	return null
}

TextRenderer.propTypes = {
	text: propTypes.arrayOf(propTypes.object).isRequired,
}

export default TextRenderer
