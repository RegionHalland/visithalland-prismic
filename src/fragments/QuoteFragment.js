import { graphql } from 'gatsby'

export const QuoteFragment = graphql`
	fragment QuoteFragment on PRISMIC_ContentBodyQuote {
		type
		label
		primary {
			quote_text
			quote_byline
			quote_button_label
			quote_image
			quote_imageSharp {
				childImageSharp {
					fluid(maxWidth: 1280, quality: 60) {
						...GatsbyImageSharpFluid_withWebp
					}
					fixed(width: 400, height: 400, quality: 60) {
						...GatsbyImageSharpFixed_withWebp
					}
				}
			}
			quote_link {
				_linkType
				... on PRISMIC_Content {
					title
					_meta {
						uid
						lang
						type
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
