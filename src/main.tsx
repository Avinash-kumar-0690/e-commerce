import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { persistor, store } from './app/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { ErrorBoundary } from './components/ErrorBoundary'
import { Analytics } from '@vercel/analytics/react'

export const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>

    <Provider store={store} >
<PersistGate loading={null} persistor={persistor}>

    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <Analytics />
    </QueryClientProvider>
</PersistGate>
    </Provider>
    </ErrorBoundary>
  </StrictMode>,
)
