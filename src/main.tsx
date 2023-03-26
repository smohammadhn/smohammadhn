import React from 'react'
import ReactDOM from 'react-dom/client'

import '~/assets/styles/global.scss'

import Introduction from '~/routes/introduction/Introduction'
import Expertise from '~/routes/expertise/Expertise'
import Projects from '~/routes/projects/Projects'
import WorkExperience from '~/routes/work-experience/WorkExperience'
import Contact from './routes/contact/Contact'

import { createHashRouter, RouterProvider } from 'react-router-dom'

const router = createHashRouter([
  {
    path: '/',
    element: <Introduction />,
  },
  {
    path: 'expertise',
    element: <Expertise />,
  },
  {
    path: 'projects',
    element: <Projects />,
  },
  {
    path: 'work-experience',
    element: <WorkExperience />,
  },
  {
    path: 'contact',
    element: <Contact />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="application-background">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
)
