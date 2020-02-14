import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash.get'

import InfoBox from './InfoBox'

const InfoBoxContainer = ({ slice }) => {
	const { primary } = slice

	if (!primary) {
		return null
	}

	const title = get(primary, 'info_box_heading', '')
	const text = get(primary, 'info_box_text', null)

	return <InfoBox title={title} text={text} />
}

InfoBoxContainer.propTypes = {
	slice: PropTypes.object.isRequired,
}

export default InfoBoxContainer
