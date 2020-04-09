import { useState, useEffect } from 'react'

export const useStateWithLocalStorage = key => {
	const [value, setValue] = useState(
		JSON.parse(localStorage.getItem(key)) || [],
	)

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value))
	}, [key, value])

	return [value, setValue]
}
