import React from 'react'
import Button from './Button'
import CookieIcon from './icons/CookieIcon'

const CookieNotice = ({ onAccept }) => {
	return (
		<div className="rounded bg-white shadow-lg border-gray-300 border p-3 md:p-4">
			<div className="inline-flex items-center mb-3">
				<CookieIcon
					height={20}
					width={20}
					className="text-blue-600 mr-3"
				/>
				<span className="text-xl font-bold text-black">
					Cookies & användningsvillkor
				</span>
			</div>
			<span className="text-base text-left text-gray-700 mb-4 block">
				Den här sidan använder cookies för att analysera trafik och
				skapa en bättre användningsupplevelse. Genom att fortsätta
				använda webbplatsen godkänner du detta.
			</span>
			<Button onClick={() => onAccept()} title="Jag förstår" />
		</div>
	)
}

export default CookieNotice
