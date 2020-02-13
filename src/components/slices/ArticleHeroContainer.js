import React from 'react'
import PropTypes from 'prop-types'

import ArticleHeroFull from './ArticleHeroFull'
import ArticleHeroSplit from './ArticleHeroSplit'

// TODO: Move this if we need it elsewhere
const getAuthorRelation = obj => {
	if (!obj) {
		return {}
	}

	return {
		name: obj.editor_name ? obj.editor_name : '',
		email: obj.editor_email ? obj.editor_email : '',
		phone: obj.editor_phone ? obj.editor_phone : '',
		role: obj.editor_role ? obj.editor_role : '',
		image: obj.editor_imageSharp
			? obj.editor_imageSharp.childImageSharp.fluid
			: null,
	}
}

const ArticleHeroContainer = ({ slice, meta }) => {
	if (!slice.primary) {
		return null
	}

	const { firstPublicationDate } = meta
	const {
		primary: {
			article_hero_title: title,
			article_hero_introduction: introduction,
			article_hero_author,
			article_hero_variant: variant,
			article_hero_imageSharp: image,
		},
	} = slice

	// Prepare the author object
	const author = getAuthorRelation(article_hero_author)

	// Article Hero Split is selected
	if (variant.toLowerCase() === 'split') {
		return (
			<ArticleHeroSplit
				title={title[0].text}
				introduction={introduction}
				publicationDate={firstPublicationDate}
				author={author}
				image={image && image.childImageSharp}
			/>
		)
	}

	// Article Hero Full (or a variant that does not exist) is selected
	return (
		<ArticleHeroFull
			title={title[0].text}
			introduction={introduction}
			publicationDate={firstPublicationDate}
			author={author}
			image={image && image.childImageSharp}
		/>
	)
}

ArticleHeroContainer.propTypes = {
	slice: PropTypes.object.isRequired,
	meta: PropTypes.object.isRequired,
}

export default ArticleHeroContainer
