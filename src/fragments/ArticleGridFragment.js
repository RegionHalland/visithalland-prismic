import { graphql } from 'gatsby'

export const ArticleGridFragment = graphql`
	fragment ArticleGridFragment on PRISMIC_ContentBodyArticle_grid {
		type
		fields {
			article_grid_relationship {
				... on PRISMIC_Content {
					title
					seo_description
					_meta {
						lang
						tags
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
