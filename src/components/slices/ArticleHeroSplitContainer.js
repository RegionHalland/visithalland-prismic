import React from 'react'
import ArticleHeroSplit from './ArticleHeroSplit'

const ArticleHeroSplitContainer = ({ slice, prismicMeta }) => {
	if (!slice.primary || !prismicMeta) {
		return null
	}

	const {
		primary: {
			article_hero_split_title,
			article_hero_split_introduction,
			article_hero_split_author: {
				editor_name,
				editor_email,
				editor_phone,
				editor_role,
				editor_imageSharp: {
					childImageSharp: { fluid: editor_image },
				},
			},
			article_hero_split_imageSharp: {
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
		<ArticleHeroSplit
			title={article_hero_split_title[0].text}
			introduction={article_hero_split_introduction}
			publicationDate={prismicMeta.firstPublicationDate}
			image={image}
			author={author}
		/>
	)
}

export default ArticleHeroSplitContainer
