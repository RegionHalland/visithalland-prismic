import { graphql } from 'gatsby'

export const TextFragment = graphql`
	fragment TextFragment on PRISMIC_ContentBodyText {
		type
		label
		primary {
			text
		}
	}
`
