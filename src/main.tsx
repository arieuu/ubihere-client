import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.tsx'
import LoginPage from './pages/LoginPage.tsx'
import SignupPage from './pages/SignupPage.tsx'
import ProjectPage from './pages/ProjectPage.tsx'
import CreateProjectPage from './pages/CreateProjectPage.tsx'
import { QueryClient, QueryClientProvider } from 'react-query'

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
    path:"/project/:projectId",
    element: <ProjectPage />
  }
])

const queryClient = new QueryClient;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <App /> */}
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
