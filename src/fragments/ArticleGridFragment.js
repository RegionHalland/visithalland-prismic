import { graphql } from 'gatsby'

export const ArticleGridFragment = graphql`
	fragment ArticleGridFragment on PRISMIC_ContentBodyArticle_grid {
		type
		fields {
			article_grid_articles {
				... on PRISMIC_Content {
					title
					_meta {
						tags
						uid
					}
					seo_description
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
