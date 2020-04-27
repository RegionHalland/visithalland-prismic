import { graphql } from 'gatsby'

export const ListFragment = graphql`
	fragment ListFragment on PRISMIC_ContentBodyList {
		type
		label
		fields {
			list_title
			list_text
			list_image
			list_imageSharp {
				childImageSharp {
					fluid(maxWidth: 400, quality: 60) {
						...GatsbyImageSharpFluid_withWebp
					}
					fixed(width: 400, height: 400, quality: 60) {
						...GatsbyImageSharpFixed_withWebp
					}
				}
			}
		}
	}
`
