import React from 'react'
import PropTypes from 'prop-types'
import ArrowLeft from './icons/ArrowLeft'
import ArrowRight from './icons/ArrowRight'

const CarouselArrow = ({ onClick, direction }) => (
	<button
		className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-700"
		onClick={onClick}
	>
		{direction === 'left' ? (
			<ArrowLeft className="absolute w-4 h-4 text-white" />
		) : (
			<ArrowRight className="absolute w-4 h-4 text-white" />
		)}
	</button>
)

CarouselArrow.propTypes = {
	onClick: PropTypes.func.isRequired,
	direction: PropTypes.oneOf(['left', 'right']),
}

export default CarouselArrow
