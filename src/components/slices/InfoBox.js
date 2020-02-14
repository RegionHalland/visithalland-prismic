import React from 'react'
import PropTypes from 'prop-types'
import TextRenderer from '../TextRenderer'

const InfoBox = ({ title, text }) => (
	<div>
		<span>{title}</span>
		<div>
			<TextRenderer text={text} />
		</div>
	</div>
)

InfoBox.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.array,
}

export default InfoBox
