// https://github.com/birkir/gatsby-source-prismic-graphql/issues/42
// https://prismic.io/docs/reactjs/beyond-the-api/link-resolving
export function linkResolver(doc) {
	if (doc.type === 'content') return `/${doc.uid}`
}
