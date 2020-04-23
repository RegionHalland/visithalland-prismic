import { graphql } from 'gatsby'

export const MenuFragment = graphql`
	fragment MenuFragment on PRISMIC_Menu {
		_linkType
		menu_name
		menu_featured_label
		menu_misc_label
		nav {
			... on PRISMIC_MenuNavNav_item {
				type
				label
				primary {
					menu_item_label
				}
				fields {
					menu_sub_item_link {
						... on PRISMIC_Content {
							title
							seo_description
							seo_featured_image
							seo_featured_imageSharp {
								childImageSharp {
									fluid(maxWidth: 1920, quality: 80) {
										...GatsbyImageSharpFluid
									}
									fixed(
										width: 800
										height: 800
										quality: 80
									) {
										...GatsbyImageSharpFixed
									}
								}
							}
							_meta {
								uid
								lang
								type
							}
						}
					}
				}
			}
		}
		top_menu_links {
			top_menu_link {
				_linkType
				... on PRISMIC__ExternalLink {
					_linkType
					url
				}
			}
			top_menu_link_label
		}
	}
`
