import type { App } from 'vue'
import { ErrorInfo } from './types'

const logError = (error: Error, info?: ErrorInfo) => {
  const errorLog: ErrorInfo = {
    message: error.message,
    stack: error.stack,
    componentName: info?.componentName,
    timestamp: new Date().toISOString(),
  }

  if (import.meta.env.MODE === 'production') {
    console.error('env in prod')
  }

  console.error('🔴 Global Error Handler:', errorLog)
}

export const setupErrorHandler = (app: App) => {
  app.config.errorHandler = (err, instance) => {
    const error = err as Error
    logError(error, {
      message: error.message,
      componentName: instance?.$options?.name || 'Unknown Component',
      timestamp: new Date().toISOString(),
    })
  }

  window.addEventListener('error', event => {
    logError(new Error(event.message), {
      message: event.message,
      stack: event.error?.stack,
      timestamp: new Date().toISOString(),
    })
  })

  window.addEventListener('unhandledrejection', event => {
    const error = event.reason instanceof Error ? event.reason : new Error(String(event.reason))

    logError(error, {
      message: 'Unhandled Promise Rejection',
      timestamp: new Date().toISOString(),
    })
  })
}
