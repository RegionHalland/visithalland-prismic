import React from 'react'
import PropTypes from 'prop-types'
import { linkResolver } from '../../utils/linkResolver'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../tailwind.config.js'

import CollectionGridImageThumbnail from '../CollectionGridImageThumbnail'
import Container from '../Container'

const config = resolveConfig(tailwindConfig)

const CollectionGridLarge = ({ items }) => (
	<Container className="px-4 md:px-6">
		<div className="flex flex-wrap -mx-2">
			{items.map(
				({ title, tags, meta, image, alt, copyright, url }, index) => (
					<GridItem
						key={`${meta.uid}-${index}`}
						className="px-2 mb-3"
					>
						<CollectionGridImageThumbnail
							title={title}
							image={image}
							copyright={copyright}
							alt={alt}
							tags={tags}
							to={linkResolver(meta)}
							url={url}
						/>
					</GridItem>
				),
			)}
		</div>
	</Container>
)

const GridItem = styled.div`
	flex: 1 1 100%;
	${tw`text-3xl`};
	@media (min-width: ${config.theme.screens.md}) {
		flex: 1 1 50%;
		${tw`text-3xl`};
	}
	@media (min-width: ${config.theme.screens.lg}) {
		flex: 1 1 33%;
		${tw`text-3xl`};
		&:nth-child(4n + 2),
		&:nth-child(4n + 3) {
			${tw`text-4xl`};
			flex: 1 1 66%;
		}
	}
`

CollectionGridLarge.propTypes = {
	items: PropTypes.array.isRequired,
}

export default CollectionGridLarge
