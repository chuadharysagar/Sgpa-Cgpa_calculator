import { createRoot } from 'react-dom/client'
import StoreContextProvider from './context/StoreContext'
import App from './App.jsx'
import './index.css'
import { StrictMode } from 'react'


createRoot(document.getElementById('root')).render(
   <StrictMode>
      <StoreContextProvider>
         <App />
      </StoreContextProvider>
   </StrictMode>
)
