import React from 'react'
import { navigate } from 'gatsby'

import ListHeader from '../ListHeader'
import FancyLink from '../FancyLink'
import { linkResolver } from '../../utils/linkResolver'

const ArticleList = ({ label, articles }) => (
	<div className="w-full h-full flex-1 bg-green-200 p-6">
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
	</div>
)

export default ArticleList
