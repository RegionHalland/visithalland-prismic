// https://github.com/birkir/gatsby-source-prismic-graphql/issues/42
// https://prismic.io/docs/reactjs/beyond-the-api/link-resolving
export function linkResolver(doc) {
	if (doc.uid === 'frontpage')
		return doc.lang === 'sv-se' ? '/' : doc.lang.substring(0, 2)
	if (doc.type === 'content')
		return doc.lang === 'sv-se'
			? `/${doc.uid}`
			: `${doc.lang.substring(0, 2)}/${doc.uid}`
}
