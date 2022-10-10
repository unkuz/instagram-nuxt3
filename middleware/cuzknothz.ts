import { APP_ROUTES } from '@@/routes'

export default defineNuxtRouteMiddleware(() => navigateTo(APP_ROUTES.HOME))
