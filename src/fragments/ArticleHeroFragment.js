/* eslint-disable no-unused-vars */
// Disable no-unused-vars as EditorFragment will be "unused"
import { graphql } from 'gatsby'
import { EditorFragment } from './EditorFragment'

export const ArticleHeroFragment = graphql`
	fragment ArticleHeroFragment on PRISMIC_ContentBodyArticle_hero {
		type
		label
		primary {
			article_hero_title
			article_hero_introduction
			article_hero_variant
			article_hero_author {
				...EditorFragment
			}
			article_hero_image
			article_hero_imageSharp {
				childImageSharp {
					fluid(maxWidth: 1900) {
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
