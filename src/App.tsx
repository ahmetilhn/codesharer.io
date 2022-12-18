import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { GlobalStyle } from './styles/global'
import { Toaster } from 'react-hot-toast'
import { colors } from './constants/theme'
const App = () => {
  return (
    <React.Fragment>
      <Toaster
        toastOptions={{
          position: 'top-center',
          duration: 2000,
          style: {
            background: colors.DARK,
            color: colors.GREEN,
          },
        }}
      />
      <GlobalStyle />
      <RouterProvider router={router} />
    </React.Fragment>
  )
}

export default App
