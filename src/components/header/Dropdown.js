import React from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'

import Container from '../Container'
import Image from '../Image'
import ImageCopyright from '../ImageCopyright'
import ListHeader from '../ListHeader'
import FancyLink from '../FancyLink'
import TextRenderer from '../TextRenderer'
import CloseIcon from '../icons/CloseIcon'
import Button from '../Button'
import { linkResolver } from '../../utils/linkResolver'

const Dropdown = ({
	featuredLabel,
	featuredArticle,
	miscLabel,
	miscArticles,
	close,
}) => (
	<DropdownContainer className="absolute z-50 bottom-0 w-full">
		<Container className="lg:px-6">
			<DropdownInner className="flex flex-col">
				<button
					className="flex justify-between items-center focus:outline-none w-full bg-blue-700 text-white font-bold py-3 px-4 leading-none"
					onClick={close}
				>
					<span>Stäng meny</span>
					<CloseIcon width={16} height={16} />
				</button>
				<div className="flex flex-1 flex-wrap">
					<FeaturedArticle
						article={featuredArticle}
						label={featuredLabel}
					/>
					<ArticleList articles={miscArticles} label={miscLabel} />
				</div>
			</DropdownInner>
		</Container>
	</DropdownContainer>
)

const FeaturedArticle = ({ label, article }) => (
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
			<div className="mb-3 lg:mb-6">
				<ListHeader title={label} />
			</div>
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

const poop = {
	title: 'Naturupplevelser',
	description: null,
	imageCopyright: 'Foto: Jonathan Strömberg',
	meta: { uid: 'naturupplevelser', lang: 'sv-se', type: 'content' },
}

const ArticleList = ({ label, articles }) => {
	articles = Array(20).fill(poop)

	return (
		<ArticleListContainer className="w-full md:flex-1 bg-green-200 p-6 overflow-y-auto">
			<div className="mb-3 lg:mb-6">
				<ListHeader title={label} />
			</div>
			<ul>
				{articles.map(item => (
					<li key={item.meta.uid}>
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
}

const ArticleListContainer = styled.div`
	max-height: 440px;
`

const DropdownContainer = styled.div`
	transform: translateY(100%);
`

const DropdownInner = styled.div`
	height: 440px;
`

export default Dropdown
