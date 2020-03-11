import { graphql } from 'gatsby'

export const VideoFragment = graphql`
	fragment VideoFragment on PRISMIC_ContentBodyVideo {
		type
		primary {
			video_link
		}
	}
`
