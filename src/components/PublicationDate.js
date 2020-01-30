import PropTypes from 'prop-types'
import React from 'react'
import { format } from 'date-fns'
import { sv } from 'date-fns/locale'

const PublicationDate = ({ publicationDate, ...props }) => {
	const formattedDate = format(new Date(publicationDate), 'd MMMM', {
		locale: sv,
	})

	return <time {...props}>{formattedDate}</time>
}

PublicationDate.propTypes = {
	publicationDate: PropTypes.string.isRequired,
}

export default PublicationDate
