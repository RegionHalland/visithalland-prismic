import { graphql } from 'gatsby'

export const HeroCarouselFragment = graphql`
	fragment HeroCarouselFragment on PRISMIC_ContentBodyHero_carousel {
		type
		fields {
			hero_carousel_button_label
			hero_carousel_relationship {
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
