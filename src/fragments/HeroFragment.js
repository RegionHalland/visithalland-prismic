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
			hero_video
			hero_author {
				...EditorFragment
			}
			hero_image
			hero_imageSharp {
				childImageSharp {
					fluid(maxWidth: 960, quality: 80) {
						...GatsbyImageSharpFluid
					}
					fixed(width: 400, height: 400, quality: 80) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	}
`
