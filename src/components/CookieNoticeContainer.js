import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import get from 'lodash.get'
import { CookiesProvider, useCookies } from 'react-cookie'
import { useTransition, animated } from 'react-spring'

import CookieNotice from './CookieNotice'

const CookieNoticeContainer = ({ notice }) => {
	const [cookies, setCookie] = useCookies()

	const [showNotice, setShowNotice] = useState(true)
	const handleShowNotice = val => {
		setShowNotice(val)
		setCookie('cookies_consent', 'accepted', { path: '/' })
	}

	useEffect(() => {
		setShowNotice(cookies.cookies_consent !== 'accepted')
	}, [cookies.cookies_consent])

	const transitions = useTransition(showNotice, null, {
		from: { opacity: 0, transform: 'translateY(100%)' },
		enter: { opacity: 1, transform: 'translateY(0%)' },
		leave: { opacity: 0, transform: 'translateY(100%)' },
	})

	const noticeContent = {
		title: get(notice.edges[0].node, 'cookie_notice_title', null),
		body: get(notice.edges[0].node, 'cookie_notice_text', null),
		button_label: get(
			notice.edges[0].node,
			'cookie_notice_button_label',
			null,
		),
	}

	return (
		<CookiesProvider>
			{transitions.map(
				({ item, key, props }) =>
					item && (
						<animated.div
							key={key}
							style={props}
							className="fixed max-w-md z-50 bottom-0 left-0 right-0 mx-3 md:ml-6 mb-3 md:mb-6"
						>
							<CookieNotice
								title={noticeContent.title}
								body={noticeContent.body}
								buttonlabel={noticeContent.button_label}
								onAccept={handleShowNotice}
							/>
						</animated.div>
					),
			)}
		</CookiesProvider>
	)
}

CookieNoticeContainer.propTypes = {
	notice: PropTypes.object.isRequired,
}

export default CookieNoticeContainer
