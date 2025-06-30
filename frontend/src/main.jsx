import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import React from 'react'
import { SocketContextProvider } from './context/socketContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <SocketContextProvider>
        <App />
        </SocketContextProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
