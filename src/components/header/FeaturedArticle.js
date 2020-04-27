import React from 'react'

import Image from '../Image'
import ImageCopyright from '../ImageCopyright'
import ListHeader from '../ListHeader'
import TextRenderer from '../TextRenderer'
import Button from '../Button'
import { linkResolver } from '../../utils/linkResolver'

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
		<div className="flex-1 pt-2 pb-4 px-4 md:p-6">
			<div className="mb-3 lg:mb-6">
				<ListHeader title={label} />
			</div>
			<h3 className="font-bold text-2xl md:text-3xl leading-tight mb-3 break-words">
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

export default FeaturedArticle
