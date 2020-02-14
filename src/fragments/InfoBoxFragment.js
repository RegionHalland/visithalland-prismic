import { graphql } from 'gatsby'

export const InfoBoxFragment = graphql`
	fragment InfoBoxFragment on PRISMIC_ContentBodyInfo_box {
		type
		primary {
			info_box_heading
			info_box_text
		}
	}
`
