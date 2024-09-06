import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.tsx'
import LoginPage from './pages/LoginPage.tsx'
import SignupPage from './pages/SignupPage.tsx'
import ProjectPage from './pages/ProjectPage.tsx'
import CreateProjectPage from './pages/CreateProjectPage.tsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <HomePage />
  },
  {
    path: "/signup",
    element: <SignupPage />
  },
  {
    path:"/login",
    element: <LoginPage />
  },
  {
    path:"/createproject",
    element: <CreateProjectPage />
  },
  {
    path:"/projectpage",
    element: <ProjectPage />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
