import { APP_ROUTES } from '@/routes'

/* This code exports a default function that defines a Nuxt.js route middleware. The middleware
function navigates to the home route defined in the `APP_ROUTES` object using the `navigateTo`
function. */
export default defineNuxtRouteMiddleware(() => navigateTo(APP_ROUTES.HOME))
