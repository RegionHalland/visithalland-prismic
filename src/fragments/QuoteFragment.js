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
					fluid(maxWidth: 960, quality: 80) {
						...GatsbyImageSharpFluid
					}
					fixed(width: 400, height: 400, quality: 80) {
						...GatsbyImageSharpFixed
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
