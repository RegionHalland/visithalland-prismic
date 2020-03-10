import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash.get'

import Embed from './Embed'

const EmbedContainer = ({ slice }) => {
	if (!slice.primary) {
		return null
	}

	const { primary } = slice
	const url = get(primary, 'embed_link', '')

	return <Embed url={url} />
}

EmbedContainer.propTypes = {
	slice: PropTypes.object.isRequired,
}

export default EmbedContainer
