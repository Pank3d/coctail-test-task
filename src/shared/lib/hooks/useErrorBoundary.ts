import { ref, onErrorCaptured } from 'vue'
import { type ErrorBoundaryOptions } from './types'

export const useErrorBoundary = (options?: ErrorBoundaryOptions) => {
  const error = ref<Error | null>(null)
  const errorInfo = ref<string>('')

  onErrorCaptured((err, instance, info) => {
    error.value = err as Error
    errorInfo.value = info

    if (options?.onError) {
      options.onError(err as Error, info)
    } else {
      console.error('Error boundary caught:', {
        error: err,
        component: instance?.$options?.name || 'Unknown',
        info,
      })
    }

    return false
  })

  const reset = () => {
    error.value = null
    errorInfo.value = ''
  }

  return {
    error,
    errorInfo,
    reset,
  }
}
