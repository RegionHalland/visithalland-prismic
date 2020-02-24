import { graphql } from 'gatsby'

export const EditorFragment = graphql`
	fragment EditorFragment on PRISMIC_Editor {
		editor_name
		editor_email
		editor_phone
		editor_role
		editor_image
		editor_imageSharp {
			childImageSharp {
				fluid(maxWidth: 300, maxHeight: 300) {
					...GatsbyImageSharpFluid
				}
				fixed(width: 100, height: 100) {
					...GatsbyImageSharpFixed
				}
			}
		}
	}
`
