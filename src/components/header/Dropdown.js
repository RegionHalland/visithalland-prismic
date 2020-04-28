import React from 'react'
import { useTransition, animated } from 'react-spring'

import Container from '../Container'
import FeaturedArticle from './FeaturedArticle'
import ArticleList from './ArticleList'

const Dropdown = ({ closeDropdown, submenuId, submenus }) => {
	const transition = useTransition(
		submenus.find(x => x.id === submenuId) || {},
		item => item.id,
		{
			from: { transform: 'translateY(-100%)' },
			enter: { transform: 'translateY(0%)' },
			leave: { transform: 'translateY(100%)' },
			initial: null,
		},
	)

	return (
		<Container className="lg:px-6">
			<div className="flex flex-1 flex-col overflow-hidden h-600px md:h-400px">
				<div className="relative flex h-full">
					{transition.map(
						({ item, key, props }) =>
							item && (
								<animated.div
									className="absolute h-full flex w-full flex-wrap"
									key={key}
									style={props}
								>
									<FeaturedArticle
										article={item.subItems[0]}
										label="Utvald artikel"
									/>
									<ArticleList
										articles={item.subItems.slice(1)}
										label="Artiklar"
									/>
								</animated.div>
							),
					)}
				</div>
			</div>
		</Container>
	)
}

export default Dropdown
