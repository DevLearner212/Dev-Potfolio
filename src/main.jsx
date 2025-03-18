import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProjectDetail from './component/TechStack/ProjectDetail.jsx';
import ECommerce from './component/TechStack/ECommerce.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,   // Add your GitHub page component
  },
  {
    path: '/github',
    element: <ProjectDetail />,   // Add your GitHub page component
  },
  {
    path: '/E-commerce',
    element: <ECommerce />,   // Add your GitHub page component
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
