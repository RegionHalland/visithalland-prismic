import { graphql } from 'gatsby'

export const CollectionFragment = graphql`
	fragment CollectionFragment on PRISMIC_ContentBodyCollection {
		type
		label
		primary {
			collection_variant
		}
		fields {
			collection_description
			collection_title
			collection_image
			collection_imageSharp {
				childImageSharp {
					fluid(maxWidth: 1920, quality: 80) {
						...GatsbyImageSharpFluid
					}
					fixed(width: 800, height: 800, quality: 80) {
						...GatsbyImageSharpFixed
					}
				}
			}
			collection_link {
				_linkType
				... on PRISMIC_Content {
					title
					seo_description
					_meta {
						lang
						uid
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
