import React from 'react'
import { addDecorator, configure } from '@storybook/react'
import Container from '../src/components/Container'
import '../src/styles/index.css'

//https://www.gatsbyjs.org/docs/visual-testing-with-storybook/#setting-up-your-environment
import { action } from '@storybook/addon-actions'
// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
	enqueue: () => {},
	hovering: () => {},
}

addDecorator(storyFn => <div className="p-8 font-sans">{storyFn()}</div>)

// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = ''
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
	action('NavigateTo:')(pathname)
}
