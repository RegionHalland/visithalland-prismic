import { graphql } from 'gatsby'

export const FeatureFragment = graphql`
	fragment FeatureFragment on PRISMIC_ContentBodyFeature {
		type
		label
		primary {
			feature_variant
			feature_title
			feature_button_label
			feature_image
			feature_imageSharp {
				childImageSharp {
					fluid(maxWidth: 1920, quality: 100) {
						...GatsbyImageSharpFluid
					}
					fixed(width: 800, height: 800) {
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
							fluid(maxWidth: 1920, quality: 100) {
								...GatsbyImageSharpFluid
							}
							fixed(width: 800, height: 800) {
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
