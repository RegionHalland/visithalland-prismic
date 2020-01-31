import PropTypes from 'prop-types'
import React from 'react'

import styled from 'styled-components'
import tw from 'tailwind.macro'

const Container = ({ children, tight, ...props }) => (
	<StyledContainer tight={tight} {...props}>
		{children}
	</StyledContainer>
)

const StyledContainer = styled.div`
	${props => (props.tight ? 'max-width:860px' : 'max-width:1300px')};
	margin-left: auto;
	margin-right: auto;
`

Container.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Container
