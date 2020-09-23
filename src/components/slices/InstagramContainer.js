import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import get from 'lodash.get'
import to from 'await-to-fetch'

import Instagram from './Instagram'

const TOKEN_SERVICE_URL =
	'https://dbdb-instagram-token-agent.herokuapp.com/token.json'

const InstagramContainer = ({ slice }) => {
	const [images, setImages] = useState([])
	const [loading, setLoading] = useState(true)
	const { primary } = slice

	useEffect(() => {
		const fetchImages = async () => {
			if (!primary) return

			// Fetch accessToken from the token service. The service refreshes the token automatically every 60 days.
			// https://github.com/companionstudio/instagram-token-agent
			const [tokenErr, tokenRes] = await to(fetch(TOKEN_SERVICE_URL))
			const { token } = await tokenRes.json()

			if (tokenErr) return setLoading(false)

			// Fetch the 5 latest post from the @visithalland instagram account
			// https://developers.facebook.com/docs/instagram-basic-display-api
			const [imagesErr, imagesRes] = await to(
				fetch(
					`https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=${token}&limit=8`,
				),
			)

			if (imagesErr) return setLoading(false)

			const { data } = await imagesRes.json()

			setImages(data)
			return setLoading(false)
		}

		fetchImages()
	}, [primary])

	if (!primary) return null

	const title = get(primary, 'instagram_title', '')
	const description = get(primary, 'instagram_description', null)
	const buttonLabel = get(primary, 'instagram_button_label', '')
	const buttonUrl = get(primary, 'instagram_button_link.url', null)

	return (
		<div className="py-8">
			<Instagram
				title={title}
				description={description}
				buttonLabel={buttonLabel}
				buttonUrl={buttonUrl}
				images={images}
				loading={loading}
			/>
		</div>
	)
}

InstagramContainer.propTypes = {
	slice: PropTypes.object.isRequired,
}

export default InstagramContainer
