import React from 'react'
import Author from './Author'

const AuthorContainer = ({ slice }) => {
	if (!slice.primary.author_relation) {
		return null
	}

	const {
		author_name,
		author_phone,
		author_role,
		author_email,
	} = slice.primary.author_relation

	return (
		<Author
			name={author_name}
			role={author_role}
			email={author_email}
			phone={author_phone}
		/>
	)
}

export default AuthorContainer
