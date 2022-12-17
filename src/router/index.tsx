import { createBrowserRouter } from 'react-router-dom'
import EditorPage from '../pages/Editor'
export const router = createBrowserRouter([
  {
    path: '/:id',
    element: <EditorPage />,
  },
])
