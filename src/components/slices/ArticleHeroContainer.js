import React from 'react'
import propTypes from 'prop-types'

import ArticleHero from './ArticleHero'

const ArticleHeroContainer = ({ slice, meta }) => {
	if (!slice.primary) {
		return null
	}

	const {
		primary: {
			article_hero_title,
			article_hero_introduction,
			article_hero_author,
			article_hero_variant,
			article_hero_imageSharp: image,
		},
	} = slice

	// Prepare the author object

	console.log(article_hero_variant)
	// const author = {
	// 	name: editor_name,
	// 	email: editor_email,
	// 	phone: editor_phone,
	// 	role: editor_role,
	// 	image: editor_image ? editor_image.childImageSharp.fluid : null,
	// 	className: 'text-white',
	// }

	return (
		<ArticleHero
			title={article_hero_title[0].text}
			introduction={article_hero_introduction}
			publicationDate={meta.firstPublicationDate}
			variant
			image={image && image.childImageSharp}
		/>
	)
}

ArticleHeroContainer.propTypes = {
	slice: propTypes.object.isRequired,
	meta: propTypes.object.isRequired,
}

export default ArticleHeroContainer
