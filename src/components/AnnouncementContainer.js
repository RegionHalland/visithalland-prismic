import React from 'react'
import union from 'lodash.union'
import { useStateWithLocalStorage } from '../hooks/useStateWithLocalStorage'
import PropTypes from 'prop-types'
import get from 'lodash.get'

import Announcement from './Announcement'

const AnnouncementContainer = ({ announcements }) => {
	const [viewed, setViewed] = useStateWithLocalStorage('viewedAnnouncements')
	const { edges } = announcements

	// Return if there are no announcements
	if (!Array.isArray(edges) || !edges.length) {
		return null
	}

	const handleClose = id => {
		setViewed(union([...viewed], [id]))
	}

	// Filter out all the announcements the user has seen and prepare the items array
	const items = edges
		.map(item => ({
			id: get(item, 'node._meta.id', null),
			content: get(item, 'node.announcement_content', []),
			active: get(item, 'node.announcement_active', null),
		}))
		.filter(item => !viewed.includes(item.id) && item.active)

	return (
		<div>
			{items.map(({ content, id }) => (
				<Announcement
					key={id}
					content={content}
					id={id}
					onClose={handleClose}
				/>
			))}
		</div>
	)
}

AnnouncementContainer.propTypes = {
	announcements: PropTypes.object.isRequired,
}

export default AnnouncementContainer
