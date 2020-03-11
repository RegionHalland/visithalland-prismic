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
					fluid(maxWidth: 1920, quality: 80) {
						...GatsbyImageSharpFluid
					}
					fixed(width: 800, height: 800, quality: 80) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	}
`
