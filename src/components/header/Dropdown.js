import React from 'react'
import styled from 'styled-components'

import Container from '../Container'
import Image from '../Image'
import ImageCopyright from '../ImageCopyright'
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

const DropdownContainer = styled.div`
	transform: translateY(100%);
`

const DropdownInner = styled.div`
	min-height: 440px;
`

export default Dropdown
