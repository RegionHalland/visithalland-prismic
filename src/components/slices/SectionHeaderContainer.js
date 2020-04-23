import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash.get'
import SectionHeaderLeftAligned from './SectionHeaderLeftAligned'
import SectionHeaderCentered from './SectionHeaderCentered'
import SectionHeaderLine from './SectionHeaderLine'

const SectionHeaderContainer = ({ slice }) => {
	const { primary } = slice

	if (!primary) {
		return null
	}

	const variant = get(
		primary,
		'section_header_variant',
		'left aligned',
	).toLowerCase()
	const title = get(primary, 'section_header_title')
	const body = get(primary, 'section_header_body')

	if (variant === 'centered') {
		return <SectionHeaderCentered title={title} body={body} />
	}

	if (variant === 'line') {
		return <SectionHeaderLine title={title} body={body} />
	}

	return <SectionHeaderLeftAligned title={title} body={body} />
}

SectionHeaderContainer.propTypes = {
	slice: PropTypes.object.isRequired,
}

export default SectionHeaderContainer
