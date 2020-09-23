import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import TextRenderer from '../TextRenderer'
import Button from '../Button'
import Container from '../Container'

const Instagram = ({
	title,
	description,
	buttonLabel,
	buttonUrl,
	images,
	loading,
}) => (
	<Container className="text-center">
		<h3 className="font-bold text-3xl md:text-5xl text-black mb-4">
			{title}
		</h3>
		<div className="text-lg mb-6">
			<TextRenderer text={description} />
		</div>
		<div className="mb-8">
			<Button title={buttonLabel} url={buttonUrl} />
		</div>
		{!loading && !!images.length && (
			<div className="flex flex-wrap">
				{images.map(({ id, media_url, permalink }) => (
					<a
						href={permalink}
						target="_blank"
						className="w-6/12 md:w-3/12"
					>
						<ImageContainer
							key={id}
							style={{ backgroundImage: `url(${media_url})` }}
						></ImageContainer>
					</a>
				))}
			</div>
		)}
	</Container>
)

const ImageContainer = styled.div`
	position: relative;
	overflow: hidden;
	padding-bottom: 100%;
	height: 0;
	background-size: cover;
`

Instagram.propTypes = {
	title: PropTypes.string,
	description: PropTypes.arrayOf(PropTypes.object),
	buttonLabel: PropTypes.string,
	buttonUrl: PropTypes.string,
	images: PropTypes.arrayOf(PropTypes.object),
	loading: PropTypes.bool.isRequired,
}

export default Instagram
