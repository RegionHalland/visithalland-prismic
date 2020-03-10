import React from 'react'
import PropTypes from 'prop-types'
import Container from '../Container'

import ReactEmbed from '@regionhalland/react-embed'

const Embed = ({ url }) => (
	<Container className="flex justify-center px-4 md:px-6" tight>
		<ReactEmbed url={url} options={{ controls: true }} />
	</Container>
)

Embed.propTypes = {
	url: PropTypes.string.isRequired,
}

export default Embed
