import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Author = ({ name, role, email, phone }) => {
	return (
		<div className="border p-3">
			<div>{name}</div>
			<div>{role}</div>
			<div>{phone}</div>
			<div>{email}</div>
		</div>
	)
}

export default Author
