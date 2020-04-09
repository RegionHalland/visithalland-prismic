import { graphql } from 'gatsby'

export const FeatureFragment = graphql`
	fragment FeatureFragment on PRISMIC_ContentBodyFeature {
		type
		label
		primary {
			feature_variant
			feature_title
			feature_body
			feature_button_label
			feature_image
			feature_imageSharp {
				childImageSharp {
					fluid(maxWidth: 1920, quality: 80) {
						...GatsbyImageSharpFluid
					}
					fixed(width: 800, height: 800, quality: 80) {
						...GatsbyImageSharpFixed
					}
				}
			}
			feature_link {
				_linkType
				... on PRISMIC_Content {
					title
					seo_description
					_meta {
						uid
						lang
						type
					}
					seo_featured_image
					seo_featured_imageSharp {
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
				... on PRISMIC__ExternalLink {
					_linkType
					url
				}
			}
		}
	}
`
