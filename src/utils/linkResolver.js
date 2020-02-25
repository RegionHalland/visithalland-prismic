import langShortener from './langShortener'
// https://github.com/birkir/gatsby-source-prismic-graphql/issues/42
// https://prismic.io/docs/reactjs/beyond-the-api/link-resolving
export function linkResolver(doc) {
	if (doc.uid === 'frontpage') {
		return doc.lang === 'sv-se' ? '/' : '/' + langShortener(doc.lang)
	}
	if (doc.type === 'content') {
		return doc.lang === 'sv-se'
			? `/${doc.uid}`
			: `/${langShortener(doc.lang)}/${doc.uid}`
	}

	// If we only have a doc.lang attribute let's return that page
	if (doc.lang)
		return doc.lang === 'sv-se' ? '' : `/${langShortener(doc.lang)}`

	// Return the startpage if we fail for some reason
	//console.log('LinkResolver failed. Could not generate link based on:', doc)
	return '/'
}
