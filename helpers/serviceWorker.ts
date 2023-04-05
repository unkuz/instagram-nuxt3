/**
 * This function registers a service worker for a Progressive Web App (PWA) if the browser supports it.
 */
export const registerSeviceWorkerPWA = () => {
  if (process.client) {
    window.addEventListener('load', () => {
      if (!('serviceWorker' in navigator)) {
        throw new Error('ServiceWorker is not supported in current browser!')
      }
      navigator.serviceWorker.register('/sw.js')
    })
  }
}
