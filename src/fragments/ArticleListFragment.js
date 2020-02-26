import { graphql } from 'gatsby'

export const ArticleListFragment = graphql`
	fragment ArticleListFragment on PRISMIC_ContentBodyArticle_list {
		type
		label
		primary {
			article_list_variant
		}
		fields {
			article_list_button_label
			article_list_relationship {
				_linkType
				... on PRISMIC_Content {
					title
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
