import { createRoot } from 'react-dom/client'
import StoreContextProvider from './context/StoreContext'
import App from './App.jsx'
import './index.css'


createRoot(document.getElementById('root')).render( 
      <StoreContextProvider>
         <App />
      </StoreContextProvider>
)
