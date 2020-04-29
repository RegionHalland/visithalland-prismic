import React from 'react'
import PropTypes from 'prop-types'
import Container from '../Container'
import Text from '../slices/Text'

const SectionHeaderCentered = ({ title, body }) => {
	return (
		<Container tight>
			<div className="text-center flex items-center mx-auto flex-col px-4 md:px-6 max-w-2xl">
				<Text text={title} />
				<div className="bg-green-600 w-6 h-1 mb-4 rounded" />
				<Text text={body} />
			</div>
		</Container>
	)
}

SectionHeaderCentered.propTypes = {
	title: PropTypes.array.isRequired,
	body: PropTypes.array,
}

export default SectionHeaderCentered
