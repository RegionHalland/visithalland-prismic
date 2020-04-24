import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import Container from '../Container'

import Image from '../Image'
import ImageCopyright from '../ImageCopyright'

import TextRenderer from '../TextRenderer'

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../tailwind.config.js'

const config = resolveConfig(tailwindConfig)

const List = ({ items }) => {
	return (
		<Container tight className="md:px-6">
			{items.map((item, index) => (
				<ListItem className="flex flex-wrap md:-mx-3 mb-16">
					<div className="w-full md:w-6/12  md:px-3 mb-6">
						<div className="w-full h-30vh md:h-40vh overflow-hidden relative">
							{item.image && (
								<div>
									<Image
										style={{ position: 'absolute' }}
										className="h-full w-full bottom-0 md:rounded top-0 left-0 z-0"
										objectFit="cover"
										objectPosition="50% 50%"
										fluid={item.image}
										alt={item.alt}
									/>
									<ImageCopyright credits={item.copyright} />
								</div>
							)}
						</div>
					</div>
					<div className="w-full md:w-6/12 flex flex-col px-3">
						<h2 className="text-black text-2xl md:text-3xl leading-tight font-medium mb-3">
							{item.title}
						</h2>
						{item.text && (
							<div className="text-base text-gray-700">
								<TextRenderer text={item.text} />
							</div>
						)}
					</div>
				</ListItem>
			))}
		</Container>
	)
}

const ListItem = styled.div`
	&:last-of-type {
		${tw`mb-0`};
	}
	@media (min-width: ${config.theme.screens.md}) {
		&:nth-child(even) {
			${tw`flex-row-reverse`};
		}
	}
`

List.propTypes = {
	items: PropTypes.array.isRequired,
}

export default List
