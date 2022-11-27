import * as React from 'react'
import {Link} from '@tanstack/react-router'

export default function NavbarTopLayout({
	className = '',
}: {
	className?: string
}) {
	return (
		<div
			className={`fixed bottom-0 z-10 flex w-full items-center justify-center border-t-0 bg-primary-darkest/50 bg-opacity-30 py-2 underline-offset-4 shadow-sm backdrop-blur-lg md:relative md:bg-inherit ${className}`}
		>
			<nav className='flex h-fit items-center gap-2 text-light-heading'>
				<Link
					to='/'
					className='text-light-primary flex items-start gap-2 rounded px-2 py-1 font-medium hover:underline'
				>
					Home
				</Link>
				<span className='text-light-primary invisible md:visible'>&#9671;</span>
				<Link
					to='/example'
					className='text-light-primary flex items-start gap-2 rounded px-2 py-1 font-medium hover:underline'
				>
					Example
				</Link>
			</nav>
		</div>
	)
}
