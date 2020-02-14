import { graphql } from 'gatsby'

export const ArticleListFragment = graphql`
	fragment ArticleListFragment on PRISMIC_ContentBodyArticle_list {
		type
		label
		fields {
			article_list_relationship {
				_linkType
				... on PRISMIC_Content {
					title
					_meta {
						uid
						lang
					}
					seo_featured_image
					seo_description
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
