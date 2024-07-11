import React from 'react'
import ReactDOM from 'react-dom/client'
import { routerProvider } from './routes'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      {routerProvider}
  </React.StrictMode>,
)
