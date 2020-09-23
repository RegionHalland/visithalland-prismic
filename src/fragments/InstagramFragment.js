import { graphql } from 'gatsby'

export const InstagramFragment = graphql`
	fragment InstagramFragment on PRISMIC_ContentBodyInstagram {
		type
		primary {
			instagram_title
			instagram_description
			instagram_button_label
			instagram_button_link {
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
							fluid(maxWidth: 1440, quality: 80) {
								...GatsbyImageSharpFluid_withWebp
							}
							fixed(width: 400, height: 400, quality: 80) {
								...GatsbyImageSharpFixed_withWebp
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
