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
				editor_imageSharp: {
					childImageSharp: { fluid: editor_image },
				},
			},
			article_hero_full_imageSharp: {
				childImageSharp: { fluid: image },
			},
		},
	} = slice

	// Prepare the author object
	const author = {
		name: editor_name,
		email: editor_email,
		phone: editor_phone,
		role: editor_role,
		image: editor_image,
	}

	return (
		<ArticleHeroFull
			title={article_hero_full_title[0].text}
			introduction={article_hero_full_introduction}
			publicationDate={meta.firstPublicationDate}
			image={image}
			author={author}
		/>
	)
}

export default ArticleHeroFullContainer
