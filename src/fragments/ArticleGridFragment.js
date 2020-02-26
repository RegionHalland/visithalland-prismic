import { graphql } from 'gatsby'

export const ArticleGridFragment = graphql`
	fragment ArticleGridFragment on PRISMIC_ContentBodyArticle_grid {
		type
		primary {
			article_grid_variant
		}
		fields {
			article_grid_relationship {
				... on PRISMIC_Content {
					title
					seo_description
					_meta {
						firstPublicationDate
						id
						lang
						lastPublicationDate
						tags
						type
						uid
					}
					seo_featured_image
					seo_featured_imageSharp {
						childImageSharp {
							fluid(maxWidth: 1900) {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
		}
	}
`
