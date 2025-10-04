import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { useCountdown } from './useCountdown'

describe('useCountdown', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should initialize with correct countdown value', () => {
    const { countdown } = useCountdown(5)
    expect(countdown.value).toBe(5)
  })

  it('should decrement countdown every second', async () => {
    const { countdown } = useCountdown(3)

    expect(countdown.value).toBe(3)

    vi.advanceTimersByTime(1000)
    expect(countdown.value).toBe(2)

    vi.advanceTimersByTime(1000)
    expect(countdown.value).toBe(1)

    vi.advanceTimersByTime(1000)
    expect(countdown.value).toBe(0)
  })

  it('should call onComplete when countdown reaches 0', () => {
    const onComplete = vi.fn()
    const { countdown } = useCountdown(2, onComplete)

    expect(countdown.value).toBe(2)
    expect(onComplete).not.toHaveBeenCalled()

    vi.advanceTimersByTime(1000)
    expect(countdown.value).toBe(1)
    expect(onComplete).not.toHaveBeenCalled()

    vi.advanceTimersByTime(1000)
    expect(countdown.value).toBe(0)
    expect(onComplete).toHaveBeenCalledTimes(1)
  })

  it('should stop countdown when stop is called', () => {
    const { countdown, stop } = useCountdown(5)

    expect(countdown.value).toBe(5)

    vi.advanceTimersByTime(1000)
    expect(countdown.value).toBe(4)

    stop()

    vi.advanceTimersByTime(2000)
    expect(countdown.value).toBe(4)
  })

  it('should reset countdown to initial value', () => {
    const { countdown, reset } = useCountdown(3)

    vi.advanceTimersByTime(2000)
    expect(countdown.value).toBe(1)

    reset()
    expect(countdown.value).toBe(3)
  })

  it('should handle errors in onComplete callback', () => {
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    const errorCallback = vi.fn(() => {
      throw new Error('Test error')
    })

    const { countdown } = useCountdown(1, errorCallback)

    vi.advanceTimersByTime(1000)

    expect(countdown.value).toBe(0)
    expect(errorCallback).toHaveBeenCalled()
    expect(consoleErrorSpy).toHaveBeenCalledWith('Error in countdown callback:', expect.any(Error))

    consoleErrorSpy.mockRestore()
  })
})
