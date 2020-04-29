import React from 'react'
import PropTypes from 'prop-types'
import Truncate from 'react-truncate'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../utils/linkResolver'

const TextRenderer = ({ text, lines, ellipsis = '...' }) => {
	if (lines && typeof lines === 'number') {
		return (
			<Truncate lines={3} ellipsis={<span>{ellipsis}</span>}>
				<RichText
					render={text}
					htmlSerializer={htmlSerializer}
					linkResolver={linkResolver}
				/>
			</Truncate>
		)
	}

	return (
		<RichText
			render={text}
			htmlSerializer={htmlSerializer}
			linkResolver={linkResolver}
		/>
	)
}

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
	text: PropTypes.arrayOf(PropTypes.object),
	lines: PropTypes.number,
	ellipsis: PropTypes.string,
}

export default TextRenderer
