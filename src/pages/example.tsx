import * as React from 'react'
import NavbarTopLayout from '../layouts/navbar-top'

function ExamplePage() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-primary-darkest to-dark-bg'>
			<NavbarTopLayout />
			<main className='flex flex-col items-center justify-center gap-8 px-0 pb-12 pt-12 md:gap-8 md:pt-4 md:pb-16'>
				<h1 className='text-4xl'>Example page</h1>
			</main>
		</div>
	)
}

export default ExamplePage
