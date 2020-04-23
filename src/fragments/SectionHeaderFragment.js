import { graphql } from 'gatsby'

export const SectionHeaderFragment = graphql`
	fragment SectionHeaderFragment on PRISMIC_ContentBodySection_header {
		type
		label
		primary {
			section_header_body
			section_header_title
			section_header_variant
		}
	}
`
