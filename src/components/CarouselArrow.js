import React from 'react'
import PropTypes from 'prop-types'
import ArrowLeft from './icons/ArrowLeft'
import ArrowRight from './icons/ArrowRight'

const CarouselArrow = ({ onClick, direction }) => (
	<div className="px-4">
		<button
			className="flex items-center justify-center focus:outline-none active:outline-none h-10 w-10 rounded-full bg-blue-600 hover:bg-blue-700 focus:bg-blue-700"
			onClick={onClick}
		>
			{direction === 'left' ? (
				<ArrowLeft className="absolute w-4 h-4 text-white" />
			) : (
				<ArrowRight className="absolute w-4 h-4 text-white" />
			)}
		</button>
	</div>
)

CarouselArrow.propTypes = {
	onClick: PropTypes.func.isRequired,
	direction: PropTypes.oneOf(['left', 'right']),
}

export default CarouselArrow
