import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Author = ({ name, role, email, phone, image }) => {
	return (
		<div className="border p-3">
			<Img
				className="h-32 w-32 rounded-full"
				fluid={image}
				alt="hahahahahaha"
			/>
			<div>{name}</div>
			<div>{role}</div>
			<div>{phone}</div>
			<div>{email}</div>
		</div>
	)
}

export default Author
