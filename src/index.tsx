import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { GlobalStyle } from './styles/global'
import { Toaster } from 'react-hot-toast'
import { colors } from './constants/theme'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Toaster
      toastOptions={{
        // Define default options
        className: '',
        duration: 5000,
        style: {
          background: colors.DARK,
          color: colors.GREEN,
        },
      }}
    />
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
