import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {QueryClient, QueryClientProvider} from 'react-query'
import './index.scss'
import { BrowserRouter as Routers } from 'react-router-dom'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routers>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Routers>
  </React.StrictMode>
);
