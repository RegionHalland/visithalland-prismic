import React from 'react'
import ArticleGrid from './ArticleGrid'

const ArticleGridContainer = ({ slice, meta, seo }) => {
	if (!slice.fields) {
		return null
	}

	const articles = slice.fields.map(({ article_grid_articles: item }) => ({
		title: item.title,
		tags: item._meta.tags,
		image: item.seo_featured_imageSharp
			? item.seo_featured_imageSharp.childImageSharp.fluid
			: null,
		to: item._meta.uid,
	}))

	return <ArticleGrid articles={articles} />
}

export default ArticleGridContainer
