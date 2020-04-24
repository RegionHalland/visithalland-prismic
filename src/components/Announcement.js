import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import TextRenderer from './TextRenderer'
import BellIcon from './icons/BellIcon'
import FancyLink from './FancyLink'

const Announcement = ({ content, id, onClose }) => {
	const [active, setActive] = useState()
	return (
		<div className="flex items-start md:items-center text-blue-700 bg-gray-200 justify-between px-4 py-2 text-base">
			<BellIcon className="text-gray-600 mr-4 mt-2 h-4 w-4 md:mt-0" />
			<MessageContainer>
				<div className="flex-1 mb-1 md:mb-0">
					<TextRenderer text={content} />
				</div>

				<FancyLink
					onMouseEnter={() => setActive()}
					onMouseLeave={() => setActive(!active)}
					active={active}
					onClick={() => onClose(id)}
					title="Stäng"
				/>
			</MessageContainer>
		</div>
	)
}

const MessageContainer = styled.div`
	${tw`flex flex-col md:flex-row flex-1 w-full justify-between items-start md:items-center`};
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
