import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import TextRenderer from './TextRenderer'

const Announcement = ({ content, id, onClose }) => {
	return (
		<div className="flex items-start text-blue-700 bg-gray-200 justify-between px-4 py-2 text-sm">
			<MessageContainer>
				<TextRenderer text={content} />
			</MessageContainer>
			<CloseButton onClick={() => onClose(id)}>
				Stäng meddelande
			</CloseButton>
		</div>
	)
}

const CloseButton = styled.button`
	${tw`flex underline hover:no-underline`};
	flex: 0 0 auto;
`

const MessageContainer = styled.div`
	${tw`flex pr-4`};
	flex: 0 1 auto;

	& a {
		${tw`underline hover:no-underline`}
	}
`

Announcement.propTypes = {
	content: PropTypes.array.isRequired,
	id: PropTypes.string.isRequired,
	onClose: PropTypes.func.isRequired,
}

export default Announcement
