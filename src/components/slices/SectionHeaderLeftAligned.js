import React from 'react'
import PropTypes from 'prop-types'
import Container from '../Container'
import Text from '../slices/Text'

const SectionHeaderLeftAligned = ({ title, body }) => {
	console.log(title)
	return (
		<Container tight>
			<div className="max-w-2xl">
				<Text text={title} />
				<div className="bg-green-600 rounded-tr rounded-br w-6 h-1 mb-4 mx-4 md:mx-6" />
				<Text text={body} />
			</div>
		</Container>
	)
}

SectionHeaderLeftAligned.propTypes = {
	title: PropTypes.object.isRequired,
	body: PropTypes.object,
}

export default SectionHeaderLeftAligned
