import React from 'react'
import ReactDOM from 'react-dom/client'
import "./App.css"
import App from './App.tsx'
import { SearchContextProvider } from './context/searchContext.tsx'
import { AuthContextProvider } from './context/authContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
