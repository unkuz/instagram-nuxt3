export const registerSeviceWorkerPWA = () => {
  if (!('serviceWorker' in navigator)) {
    throw new Error('ServiceWorker is not supported in current browser!')
  }
  navigator.serviceWorker.register('/sw.js')
}
