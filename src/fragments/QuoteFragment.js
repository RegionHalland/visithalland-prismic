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
					fluid(maxWidth: 1920) {
						...GatsbyImageSharpFluid
					}
					fixed(width: 800, height: 800) {
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
