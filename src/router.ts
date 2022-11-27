import {createRouteConfig, createReactRouter} from '@tanstack/react-router'

import HomePage from './pages/home'
import ExamplePage from './pages/example'

const rootRoute = createRouteConfig()

const indexRoute = rootRoute.createRoute({
	path: '/',
	component: HomePage,
})
const exampleRoute = rootRoute.createRoute({
	path: '/example',
	component: ExamplePage,
})

const routeConfig = rootRoute.addChildren([indexRoute, exampleRoute])
const router = createReactRouter({routeConfig})

export default router
