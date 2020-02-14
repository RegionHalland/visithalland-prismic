import { graphql } from 'gatsby'

export const ImageFullWidthFragment = graphql`
	fragment ImageFullWidthFragment on PRISMIC_ContentBodyFull_width_image {
		type
		primary {
			full_width_image_caption
			full_width_image_src
			full_width_image_srcSharp {
				childImageSharp {
					fluid(maxWidth: 1900) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	}
`
