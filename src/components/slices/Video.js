import React from 'react'
import PropTypes from 'prop-types'
import Container from '../Container'

import styled from 'styled-components'
import tw from 'tailwind.macro'

import ReactPlayer from 'react-player'

const Video = ({ url }) => (
	<Container tight className="px-4 md:px-6">
		<VideoContainer>
			<VideoElement
				url={url}
				controls={true}
				width="100%"
				height="100%"
			/>
		</VideoContainer>
	</Container>
)

const VideoContainer = styled.div`
	${tw`relative overflow-hidden`};
	padding-top: 56.25%;
`

const VideoElement = styled(ReactPlayer)`
	${tw`absolute top-0 left-0 w-full h-full`}
`

Video.propTypes = {
	url: PropTypes.string.isRequired,
}

export default Video
