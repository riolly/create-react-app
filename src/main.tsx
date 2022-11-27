import React from 'react'
import ReactDOM from 'react-dom/client'

import {RouterProvider, Outlet} from '@tanstack/react-router'
import router from './router'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router}>
			<Outlet />
		</RouterProvider>
	</React.StrictMode>
)
