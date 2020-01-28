import React from 'react'

const Author = ({ slice }) => {
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
		<div className="border p-3">
			<div className="text-xs mb-2">(type: {slice.type})</div>
			<div>{author_name}</div>
			<div>{author_role}</div>
			<div>{author_phone}</div>
			<div>{author_email}</div>
		</div>
	)
}

export default Author
