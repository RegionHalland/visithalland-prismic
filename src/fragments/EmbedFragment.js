import { graphql } from 'gatsby'

export const EmbedFragment = graphql`
	fragment EmbedFragment on PRISMIC_ContentBodyEmbed {
		type
		primary {
			embed_link
		}
	}
`
