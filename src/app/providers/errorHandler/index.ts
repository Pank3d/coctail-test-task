import type { App } from "vue";

interface ErrorInfo {
  message: string;
  stack?: string;
  componentName?: string;
  timestamp: string;
}

const logError = (error: Error, info?: ErrorInfo) => {
  const errorLog: ErrorInfo = {
    message: error.message,
    stack: error.stack,
    componentName: info?.componentName,
    timestamp: new Date().toISOString(),
  };

  // В production отправлять в Sentry/LogRocket
  if (import.meta.env.MODE === "production") {
    // TODO: Интеграция с error tracking сервисом
    // Sentry.captureException(error, { extra: errorLog });
  }

  console.error("🔴 Global Error Handler:", errorLog);
};

export const setupErrorHandler = (app: App) => {
  // Vue error handler
  app.config.errorHandler = (err, instance, info) => {
    const error = err as Error;
    logError(error, {
      message: error.message,
      componentName: instance?.$options?.name || "Unknown Component",
      timestamp: new Date().toISOString(),
    });
  };

  // Window error handler для необработанных ошибок
  window.addEventListener("error", (event) => {
    logError(new Error(event.message), {
      message: event.message,
      stack: event.error?.stack,
      timestamp: new Date().toISOString(),
    });
  });

  // Promise rejection handler
  window.addEventListener("unhandledrejection", (event) => {
    const error = event.reason instanceof Error
      ? event.reason
      : new Error(String(event.reason));

    logError(error, {
      message: "Unhandled Promise Rejection",
      timestamp: new Date().toISOString(),
    });
  });
};
