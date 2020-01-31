import React from 'react'
import ArticleHeroFull from './ArticleHeroFull'

const ArticleHeroFullContainer = ({ slice, meta }) => {
	if (!slice.primary || !meta) {
		return null
	}

	const {
		primary: {
			article_hero_full_title,
			article_hero_full_introduction,
			article_hero_full_author: {
				editor_name,
				editor_email,
				editor_phone,
				editor_role,
				editor_imageSharp: editor_image,
			},
			article_hero_full_imageSharp: image,
		},
	} = slice

	// Prepare the author object
	const author = {
		name: editor_name,
		email: editor_email,
		phone: editor_phone,
		role: editor_role,
		image: editor_image ? editor_image.childImageSharp.fluid : null,
		className: 'text-white',
	}

	return (
		<ArticleHeroFull
			title={article_hero_full_title[0].text}
			introduction={article_hero_full_introduction}
			publicationDate={meta.firstPublicationDate}
			image={image ? image.childImageSharp.fluid : null}
			author={author}
		/>
	)
}

export default ArticleHeroFullContainer
