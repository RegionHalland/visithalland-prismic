import React from 'react'
import PropTypes from 'prop-types'
import { linkResolver } from '../../utils/linkResolver'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../tailwind.config.js'

import ArticleCard from '../ArticleCard'
import Container from '../Container'

const config = resolveConfig(tailwindConfig)

const CollectionGridSmall = ({ items }) => (
	<Container className="px-4 md:px-6" tight>
		<div className="flex flex-wrap -mx-2">
			{items.map(
				({ title, tags, meta, image, copyright, alt }, index) => (
					<GridItem
						key={`${meta.uid}-${index}`}
						className="px-2 mb-3"
					>
						<ArticleCard
							title={title}
							image={image}
							copyright={copyright}
							alt={alt}
							tags={tags}
							to={linkResolver(meta)}
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
	}
`

CollectionGridSmall.propTypes = {
	items: PropTypes.array.isRequired,
}

export default CollectionGridSmall
