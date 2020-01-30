import { graphql } from 'gatsby'
import { EditorFragment } from './EditorFragment'

export const ArticleHeroFullFragment = graphql`
	fragment ArticleHeroFullFragment on PRISMIC_ContentBodyArticle_hero_full {
		type
		label
		primary {
			article_hero_full_image
			article_hero_full_imageSharp {
				childImageSharp {
					fluid(maxWidth: 1900) {
						...GatsbyImageSharpFluid
					}
				}
			}
			article_hero_full_title
			article_hero_full_introduction
			article_hero_full_author {
				...EditorFragment
			}
		}
	}
`
