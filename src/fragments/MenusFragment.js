import { graphql } from 'gatsby'

export const MenusFragment = graphql`
	fragment MenusFragment on PRISMIC_Menu {
		navigation_label
		support_label
		navigation_group {
			navigation_link_label
			navigation_link {
				... on PRISMIC_Content {
					_meta {
						uid
					}
				}
			}
		}
		support_group {
			support_link {
				_linkType
				... on PRISMIC__ExternalLink {
					_linkType
					url
				}
				... on PRISMIC__FileLink {
					_linkType
					url
				}
				... on PRISMIC_Content {
					_meta {
						uid
					}
				}
			}
		}
	}
`
