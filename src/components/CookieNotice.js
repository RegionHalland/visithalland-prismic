import React from 'react'
import Button from './Button'
import CookieIcon from './icons/CookieIcon'

const CookieNotice = ({ onAccept }) => {
	return (
		<div className="rounded bg-white shadow-lg border-gray-300 border p-3 md:p-4">
			<CookieIcon
				height={20}
				width={20}
				className="text-green-500 mb-5"
			/>
			<span className="text-base text-left text-gray-700 mb-4 block">
				Den här sidan använder cookies för att ge dig en bättre
				användarupplevelse. Genom att fortsätta använda webbplatsen
				godkänner du detta.
			</span>
			<Button onClick={() => onAccept()} title="Jag förstår" />
		</div>
	)
}

export default CookieNotice
