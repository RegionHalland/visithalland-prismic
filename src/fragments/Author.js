import { graphql } from 'gatsby'

export const Author = graphql`
	fragment Author on PRISMIC_ContentBodyAuthor {
		type
		label
		primary {
			author_relation {
				... on PRISMIC_Editor {
					author_name
					author_phone
					author_role
					author_email
				}
			}
		}
	}
`
