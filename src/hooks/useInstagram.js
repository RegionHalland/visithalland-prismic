import { useState, useEffect } from 'react'

export const useInstagram = ({ userId, photoCount, thumbnailWidth }) => {
	const [photos, setPhotos] = useState([])

	useEffect(() => {
		const get = async () => {
			// https://stackoverflow.com/a/47243409/2217533
			const res = await fetch(
				`https://www.instagram.com/graphql/query?query_id=17888483320059182&variables={"id":${userId},"first":${photoCount},"after":null}`,
			)
			const { data } = await res.json()
			const photos = data.user.edge_owner_to_timeline_media.edges.map(
				({ node }) => {
					const { id } = node
					const caption =
						node.edge_media_to_caption.edges[0].node.text
					const thumbnail = node.thumbnail_resources.find(
						thumbnail => thumbnail.config_width === thumbnailWidth,
					)
					const {
						src,
						config_width: width,
						config_height: height,
					} = thumbnail
					const url = `https://www.instagram.com/p/${node.shortcode}`
					return { id, caption, src, width, height, url }
				},
			)
			setPhotos(photos)
		}
		get()
	}, [])

	return photos
}
