import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash.get'

import Video from './Video'

const VideoContainer = ({ slice }) => {
	if (!slice.primary) {
		return null
	}

	const { primary } = slice
	const url = get(primary, 'video_link', '')

	return <Video url={url} />
}

VideoContainer.propTypes = {
	slice: PropTypes.object.isRequired,
}

export default VideoContainer
