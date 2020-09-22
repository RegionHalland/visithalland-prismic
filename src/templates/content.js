import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash.get'
import { useInstagram } from '../hooks/useInstagram'

const App = () => {
	let photos = useInstagram({
		userId: '4159517233',
		thumbnailWidth: 640,
		photoCount: 5,
	})

	return (
		<div>
			{photos &&
				photos.map(({ id, caption, src, width, height, url }) => (
					<a key={id} href={url}>
						<img src={src} alt={caption} />
					</a>
				))}
		</div>
	)
}

export default App
