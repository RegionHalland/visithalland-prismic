import { graphql } from 'gatsby'

export const ImageFullWidthFragment = graphql`
	fragment ImageFullWidthFragment on PRISMIC_ContentBodyImage_full_width {
		type
		primary {
			image_full_width_caption
			image_full_width_image
			image_full_width_imageSharp {
				childImageSharp {
					fluid(maxWidth: 400, maxHeight: 250) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	}
`
