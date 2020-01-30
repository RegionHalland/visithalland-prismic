import { graphql } from 'gatsby'
import { EditorFragment } from './EditorFragment'

export const ArticleHeroSplitFragment = graphql`
	fragment ArticleHeroSplitFragment on PRISMIC_ContentBodyArticle_hero_split {
		type
		label
		primary {
			article_hero_split_image
			article_hero_split_imageSharp {
				childImageSharp {
					fluid(maxWidth: 1900) {
						...GatsbyImageSharpFluid
					}
				}
			}
			article_hero_split_title
			article_hero_split_introduction
			article_hero_split_author {
				...EditorFragment
			}
		}
	}
`
