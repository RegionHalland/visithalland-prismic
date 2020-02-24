import { graphql } from 'gatsby'

export const PageHeroFragment = graphql`
	fragment PageHeroFragment on PRISMIC_ContentBodyPage_hero {
		type
		primary {
			page_hero_introduction
			page_hero_title
			page_hero_image
			page_hero_imageSharp {
				childImageSharp {
					fluid(maxWidth: 1900) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	}
`
