import type { App } from 'vue'

const logError = () => {
  // тут можно что-то логировать
}

export const setupErrorHandler = (app: App) => {
  app.config.errorHandler = () => {
    logError()
  }

  window.addEventListener('error', () => {
    logError()
  })

  window.addEventListener('unhandledrejection', () => {
    logError()
  })
}
