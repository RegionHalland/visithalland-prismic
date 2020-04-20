import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash.get'

import List from './List'

const ListContainer = ({ slice }) => {
	const { fields } = slice

	if (!fields || !Array.isArray(fields)) {
		return null
	}

	const items = fields.map(item => {
		const title = get(item, 'list_title', null)
		const text = get(item, 'list_text', null)
		const image = get(item, 'list_imageSharp.childImageSharp.fluid', null)
		const copyright = get(item, 'list_image.copyright', null)
		const alt = get(item, 'list_imageSharp.alt', null)

		return {
			title,
			text,
			image,
			copyright,
			alt,
		}
	})

	return <List items={items} />
}

ListContainer.propTypes = {
	slice: PropTypes.object.isRequired,
}

export default ListContainer
