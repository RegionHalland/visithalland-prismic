import React from 'react'
import PropTypes from 'prop-types'
import TextRenderer from './TextRenderer'
import BellIcon from './icons/BellIcon'
import CloseIcon from './icons/CloseIcon'
import IconButton from './IconButton'

import styled from 'styled-components'
import tw from 'tailwind.macro'

const Announcement = ({ content, id, onClose }) => {
	return (
		<div className="flex items-start md:items-center text-blue-700 border-b border-gray-300 bg-green-200 justify-between px-4 py-2 text-base relative z-50">
			<BellIcon className="text-green-600 mr-4 mt-2 h-4 w-4 md:mt-0" />

			<StyledText className="flex-1 mb-2 mr-6 md:mb-0">
				<TextRenderer text={content} />
			</StyledText>
			<IconButton
				size="small"
				className="self-center"
				colorscheme="green"
				icon={<CloseIcon height={10} width={10} />}
				onClick={() => onClose(id)}
			/>
		</div>
	)
}

const StyledText = styled.div`
	& p > a {
		${tw`underline`}
	}
`

Announcement.propTypes = {
	content: PropTypes.array.isRequired,
	id: PropTypes.string.isRequired,
	onClose: PropTypes.func.isRequired,
}

export default Announcement
