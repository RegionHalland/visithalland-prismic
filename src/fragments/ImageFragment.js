import { graphql } from 'gatsby'

export const ImageFragment = graphql`
	fragment ImageFragment on PRISMIC_ContentBodyImage {
		type
		primary {
			image_variant
			image_caption
			image_image
			image_imageSharp {
				childImageSharp {
					fluid(maxWidth: 800, quality: 60) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	}
`
