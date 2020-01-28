import PropTypes from 'prop-types'
import React from 'react'

const Button = ({ title, loading, ...props }) => (
	<button {...props}>{title}</button>
)

Button.propTypes = {
	title: PropTypes.string.isRequired,
	loading: PropTypes.bool,
}

export default Button
