import React from 'react'
import ArticleList from './ArticleList'

const ArticleListContainer = ({ slice, meta, seo }) => {
	if (!slice.fields) {
		return null
	}

	const articles = slice.fields.map(({ article_list_articles: item }) => ({
		title: item.title,
		excerpt: item.seo_description || null,
		image: item.seo_featured_imageSharp
			? item.seo_featured_imageSharp.childImageSharp.fluid
			: null,
		to: item._meta.uid,
	}))

	return <ArticleList articles={articles} />
}

export default ArticleListContainer
