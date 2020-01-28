import React from 'react'

const Author = ({ name, role, email, phone }) => (
	<div className="border p-3">
		<div>{name}</div>
		<div>{role}</div>
		<div>{phone}</div>
		<div>{email}</div>
	</div>
)

export default Author
