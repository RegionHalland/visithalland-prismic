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

		return {
			title,
			text,
			image,
		}
	})

	return <List items={items} />
}

ListContainer.propTypes = {
	slice: PropTypes.object.isRequired,
}

export default ListContainer
