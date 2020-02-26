/* eslint-disable no-unused-vars */
// Disable no-unused-vars as EditorFragment will be "unused"
import { graphql } from 'gatsby'
import { EditorFragment } from './EditorFragment'

const ArticleHeroFragment = graphql`
	fragment ArticleHeroFragment on PRISMIC_ContentBodyArticle_hero {
		type
		primary {
			article_hero_title
			article_hero_introduction
			article_hero_variant
			article_hero_author {
				... on PRISMIC_Editor {
					editor_name
					editor_email
					editor_phone
					editor_role
					editor_image
					editor_imageSharp {
						childImageSharp {
							fluid(maxWidth: 300, maxHeight: 300) {
								...GatsbyImageSharpFluid
							}
							fixed(width: 100, height: 100) {
								...GatsbyImageSharpFixed
							}
						}
					}
				}
			}
			article_hero_image
			article_hero_imageSharp {
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

export { ArticleHeroFragment }
