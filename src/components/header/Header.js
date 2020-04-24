import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import TopNavigation from './TopNavigation'
import LanguageMenu from './LanguageMenu'

import Container from '../Container'
import Image from '../Image'
import ImageCopyright from '../ImageCopyright'
import FancyLink from '../FancyLink'
import TextRenderer from '../TextRenderer'
import CloseIcon from '../icons/CloseIcon'
import Button from '../Button'
import Link from 'gatsby-link'
import { linkResolver } from '../../utils/linkResolver'
import pattern from '../../images/bg-pattern.png'

const Header = ({ meta, mainNavigation, topNavigation, langs }) => {
	const [activeId, setActiveId] = useState(null)

	const menuItemPress = id => {
		return setActiveId(
			typeof activeId === 'number' && activeId === id ? null : id,
		)
	}

	const closeMenu = () => {
		setActiveId(null)
	}

	return (
		<React.Fragment>
			<TopNavigation items={topNavigation} />
			<header className="sticky top-0 z-50">
				<BackgroundPattern className="bg-blue-700">
					<Container className="flex flex-wrap justify-between px-4 md:px-6 py-4 md:py-6">
						<Link
							to={linkResolver({ lang: meta.lang })}
							className="text-white leading-none font-semibold text-xl md:text-2xl md:pr-4 lg:pr-8"
						>
							Visithalland.com
						</Link>
						<ul className="hidden md:flex flex-1 px-4 lg:px-8">
							{mainNavigation.items.map(({ label, id }) => (
								<li key={id}>
									<NavItem
										active={activeId === id}
										onClick={() => menuItemPress(id)}
									>
										{label}
									</NavItem>
								</li>
							))}
						</ul>
						<LanguageMenu languages={langs} meta={meta} />
					</Container>
					<ul className="flex md:hidden overflow-x-scroll relative w-full bg-blue-600 px-4 py-3 ">
						{mainNavigation.items.map(({ label, id }) => (
							<li key={id}>
								<NavItem
									active={activeId === id}
									onClick={() => menuItemPress(id)}
								>
									{label}
								</NavItem>
							</li>
						))}
					</ul>
				</BackgroundPattern>
				{typeof activeId === 'number' && (
					<DropdownContainer className="absolute z-50 bottom-0 w-full">
						<Container className="md:px-6">
							<DropdownInner className="flex flex-col">
								<button
									className="flex justify-between items-center focus:outline-none w-full bg-blue-700 text-white font-bold py-3 px-4 leading-none"
									onClick={closeMenu}
								>
									<span>Stäng meny</span>
									<CloseIcon width={16} height={16} />
								</button>
								<div className="flex flex-1 flex-wrap">
									<FeaturedArticle
										article={
											mainNavigation.items.find(
												x => x.id === activeId,
											).subItems[0]
										}
										label={mainNavigation.featured_label}
									/>
									<ArticleList
										articles={mainNavigation.items
											.find(x => x.id === activeId)
											.subItems.filter(
												(x, index) => index !== 0,
											)}
										label={mainNavigation.misc_label}
									/>
								</div>
							</DropdownInner>
						</Container>
					</DropdownContainer>
				)}
			</header>
		</React.Fragment>
	)
}

const FeaturedArticle = ({ label, article }) => {
	console.log('FeaturedArticle -> article', article)
	return (
		<div className="flex w-full md:w-2/3 bg-white">
			<div className="flex-1 bg-blue-700 relative">
				<Image
					style={{ position: 'absolute' }}
					className="h-full w-full bottom-0 top-0 left-0 z-0"
					objectFit="cover"
					objectPosition="50% 50%"
					fluid={article.image}
				/>
				<ImageCopyright credits={article.imageCopyright} />
			</div>
			<div className="flex-1 p-6">
				<span>{label}</span>
				<h3 className="font-bold text-3xl leading-tight mb-3">
					{article.title}
				</h3>
				<div className="text-black mb-6 leading-normal">
					<TextRenderer lines={3} text={article.description} />
				</div>
				<Button
					title="Läs mer"
					colorscheme="green"
					to={linkResolver(article.meta)}
				/>
			</div>
		</div>
	)
}

const ArticleList = ({ label, articles }) => {
	return (
		<div className="w-full md:flex-1 bg-green-200 p-6">
			<span>{label}</span>
			<ul>
				{articles.map(item => (
					<li key={item.meta.uid}>
						<FancyLink
							title={item.title}
							size="large"
							to={linkResolver(item.meta)}
						></FancyLink>
					</li>
				))}
			</ul>
		</div>
	)
}

const NavItem = styled.button`
	transition: color 0.2s ease-in-out;
	${tw`relative leading-none font-medium hover:text-white focus:text-white focus:outline-none mr-6`};
	${({ active }) => (active ? tw`text-white` : tw`text-gray-500`)};
	&:after {
		content: '';
		transition: transform 0.2s ease-in-out;
		transform: ${({ active }) =>
			active ? 'translateY(16px) scale(1)' : 'translateY(16px) scale(0)'};
		${tw`block absolute left-0 right-0 bottom-0 mx-auto bg-white rounded-full w-2 h-2`};
	}
`

const DropdownContainer = styled.div`
	transform: translateY(100%);
`

const DropdownInner = styled.div`
	min-height: 440px;
`

const BackgroundPattern = styled.div`
	background-image: url(${pattern});
	background-size: 250px 250px;
`

export default Header
