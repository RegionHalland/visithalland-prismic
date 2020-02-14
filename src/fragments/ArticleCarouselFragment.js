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
						lang
						uid
					}
					seo_featured_imageSharp {
						id
					}
				}
			}
		}
	}
`
