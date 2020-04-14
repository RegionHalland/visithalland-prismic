import { useState, useEffect } from 'react'

export const useStateWithLocalStorage = key => {
	const [value, setValue] = useState(
		JSON.parse(
			typeof window !== 'undefined' && window.localStorage.getItem(key),
		) || [],
	)

	useEffect(() => {
		typeof window !== 'undefined' &&
			window.localStorage.setItem(key, JSON.stringify(value))
	}, [key, value])

	return [value, setValue]
}
