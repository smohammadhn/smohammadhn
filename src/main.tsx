import React from 'react'
import ReactDOM from 'react-dom/client'

import '~/assets/styles/global.scss'

import Introduction from '~/routes/introduction/Introduction'
import WhoAmI from '~/routes/whoAmI/WhoAmI'
import Projects from '~/routes/projects/Projects'
import WorkExperience from '~/routes/work-experience/WorkExperience'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Introduction />,
  },
  {
    path: 'whoAmI',
    element: <WhoAmI />,
  },
  {
    path: 'projects',
    element: <Projects />,
  },
  {
    path: 'work-experience',
    element: <WorkExperience />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
