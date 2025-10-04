export interface DataLoaderProps {
  isLoading: boolean
  isError: boolean
  loadingText?: string
  errorText?: string
  onRetry?: () => void
}
