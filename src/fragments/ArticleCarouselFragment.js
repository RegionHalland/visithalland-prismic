import { graphql } from 'gatsby'

export const ArticleCarouselFragment = graphql`
	fragment ArticleCarouselFragment on PRISMIC_ContentBodyArticle_carousel {
		type
		fields {
			article_carousel_relationship {
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
