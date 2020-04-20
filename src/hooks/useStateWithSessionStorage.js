import { useState, useEffect } from 'react'

export const useStateWithSessionStorage = key => {
	const [value, setValue] = useState(
		JSON.parse(
			typeof window !== 'undefined' && window.sessionStorage.getItem(key),
		) || [],
	)

	useEffect(() => {
		typeof window !== 'undefined' &&
			window.sessionStorage.setItem(key, JSON.stringify(value))
	}, [key, value])

	return [value, setValue]
}
