import React from 'react'
import styled from 'styled-components'
import resolveConfig from 'tailwindcss/resolveConfig'
import { navigate } from 'gatsby'

import ListHeader from '../ListHeader'
import FancyLink from '../FancyLink'
import { linkResolver } from '../../utils/linkResolver'
import tailwindConfig from '../../../tailwind.config.js'

const twConfig = resolveConfig(tailwindConfig)

const ArticleList = ({ label, articles }) => (
	<ArticleListContainer className="w-full md:flex-1 bg-green-200 p-6 overflow-y-auto">
		<div className="mb-3 lg:mb-6">
			<ListHeader title={label} />
		</div>
		<ul>
			{articles.map(item => (
				<li key={item.meta.uid} className="mb-3">
					<FancyLink
						title={item.title}
						size="large"
						onClick={() => navigate(linkResolver(item.meta))}
					/>
				</li>
			))}
		</ul>
	</ArticleListContainer>
)

const ArticleListContainer = styled.div`
	max-height: 15rem;

	@media (min-width: ${twConfig.theme.screens.md}) {
		height: 24rem;
		max-height: none;
	}
`

export default ArticleList
