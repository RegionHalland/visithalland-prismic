import React from 'react'
import PropTypes from 'prop-types'
import TextRenderer from './TextRenderer'
import BellIcon from './icons/BellIcon'
import CloseIcon from './icons/CloseIcon'
import IconButton from './IconButton'

const Announcement = ({ content, id, onClose }) => {
	return (
		<div className="flex items-start md:items-center text-blue-700 border-b border-gray-300 bg-gray-200 justify-between px-4 py-2 text-base relative z-50">
			<BellIcon className="text-gray-600 mr-4 mt-2 h-4 w-4 md:mt-0" />

			<div className="flex-1 mb-2 mr-6 md:mb-0">
				<TextRenderer text={content} />
			</div>
			<IconButton
				size="small"
				className="self-center bg-green"
				icon={<CloseIcon height={10} width={10} />}
				onClick={() => onClose(id)}
			/>
		</div>
	)
}

Announcement.propTypes = {
	content: PropTypes.array.isRequired,
	id: PropTypes.string.isRequired,
	onClose: PropTypes.func.isRequired,
}

export default Announcement
