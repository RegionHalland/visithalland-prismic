/* eslint-disable no-unused-vars */
// Disable no-unused-vars as EditorFragment will be "unused"
import { graphql } from 'gatsby'
import { EditorFragment } from './EditorFragment'

export const HeroFragment = graphql`
	fragment HeroFragment on PRISMIC_ContentBodyHero {
		type
		primary {
			hero_title
			hero_introduction
			hero_variant
			hero_author {
				...EditorFragment
			}
			hero_image
			hero_imageSharp {
				childImageSharp {
					fluid(maxWidth: 1920, quality: 100) {
						...GatsbyImageSharpFluid
					}
					fixed(width: 800, height: 800) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	}
`
