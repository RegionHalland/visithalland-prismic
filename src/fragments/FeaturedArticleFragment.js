import { graphql } from 'gatsby'

export const FeaturedArticleFragment = graphql`
	fragment FeaturedArticleFragment on PRISMIC_ContentBodyFeatured_article {
		type
		primary {
			featured_article_button_label
			featured_article_relationship {
				... on PRISMIC_Content {
					title
					seo_description
					seo_featured_image
				}
			}
		}
	}
`
