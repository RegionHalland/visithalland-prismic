import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash.get'

import ArticleHeroFull from './ArticleHeroFull'
import ArticleHeroSplit from './ArticleHeroSplit'

const ArticleHeroContainer = ({ slice, meta }) => {
	if (!slice.primary) {
		return null
	}

	const { firstPublicationDate } = meta
	const { primary } = slice

	const title = get(primary, 'article_hero_title[0].text', '')
	const introduction = get(primary, 'article_hero_introduction', [])
	const variant = get(primary, 'article_hero_variant', 'full')
	const image = get(primary, 'article_hero_imageSharp.fluid', null)
	const author = {
		name: get(primary, 'article_hero_author.editor_name', ''),
		email: get(primary, 'article_hero_author.editor_email', ''),
		phone: get(primary, 'article_hero_author.editor_phone', ''),
		role: get(primary, 'article_hero_author.editor_role', ''),
		image: get(
			primary,
			'article_hero_author.editor_imageSharp.childImageSharp.fluid',
			null,
		),
	}

	// Variant "Split" is selected
	if (variant.toLowerCase() === 'split') {
		return (
			<ArticleHeroSplit
				title={title}
				introduction={introduction}
				publicationDate={firstPublicationDate}
				author={author}
				image={image}
			/>
		)
	}

	// Variant "Full" (or a variant that does not exist) is selected
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
