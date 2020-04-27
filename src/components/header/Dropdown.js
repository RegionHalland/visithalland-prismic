import React from 'react'
import styled from 'styled-components'
import { useTransition, animated } from 'react-spring'

import Container from '../Container'
import FeaturedArticle from './FeaturedArticle'
import ArticleList from './ArticleList'
import CloseIcon from '../icons/CloseIcon'

const Dropdown = ({ closeDropdown, submenuId, submenus }) => {
	const transition = useTransition(
		submenus.find(x => x.id === submenuId) || {},
		item => item.id,
		{
			from: { transform: 'translateY(50%)', opacity: 0 },
			enter: { transform: 'translateY(0%)', opacity: 1 },
			leave: { transform: 'translateY(50%)', opacity: 0 },
			unique: true,
		},
	)

	return (
		<Container className="lg:px-6">
			<DropdownInner className="flex flex-1 flex-col">
				<button
					className="flex justify-between items-center focus:outline-none w-full bg-blue-700 text-white text-sm md:text-base font-bold py-3 px-4 leading-none "
					onClick={closeDropdown}
				>
					<span>Stäng meny</span>
					<CloseIcon width={14} height={14} />
				</button>
				<div className="relative">
					{transition.map(
						({ item, key, props }) =>
							item && (
								<animated.div
									className="absolute flex w-full"
									key={key}
									style={props}
								>
									<FeaturedArticle
										article={item.subItems[0]}
										label="Utvald artikel"
									/>
									<ArticleList
										articles={item.subItems.slice(0, 1)}
										label="Artiklar"
									/>
								</animated.div>
							),
					)}
				</div>
			</DropdownInner>
		</Container>
	)
}

const DropdownInner = styled.div`
	height: 24rem;
`

export default Dropdown
