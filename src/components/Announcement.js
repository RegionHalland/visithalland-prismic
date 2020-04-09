import React from 'react'
import TextRenderer from './TextRenderer'
import Button from './Button'
import PropTypes from 'prop-types'

const Announcement = ({ content, id, onClose }) => {
	return (
		<div className="flex items-center text-white text-lg justify-between p-4 bg-coral-500">
			<TextRenderer text={content} />
			<Button title="Stäng" onClick={() => onClose(id)} />
		</div>
	)
}

Announcement.propTypes = {
	content: PropTypes.array.isRequired,
	id: PropTypes.string.isRequired,
	onClose: PropTypes.func.isRequired,
}

export default Announcement
