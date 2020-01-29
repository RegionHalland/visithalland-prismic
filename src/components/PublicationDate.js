import PropTypes from 'prop-types'
import React from 'react'
import { format } from 'date-fns'
import { sv } from 'date-fns/locale'

const PublicationDate = ({ publication_date, ...props }) => {
	const formattedDate = format(publication_date, 'd MMMM', {
		locale: sv,
	})

	return <time {...props}>{formattedDate}</time>
}

PublicationDate.propTypes = {
	publication_date: PropTypes.number.isRequired,
}

export default PublicationDate
