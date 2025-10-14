import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProductProvider } from './context/prodcontxt.jsx'
import { AuthProvider } from './context/authcontext.jsx'
import { CartProvider } from './context/cartcontext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
      <AuthProvider>
        <CartProvider>
    <App />
    </CartProvider>
    </AuthProvider>
    </ProductProvider>
  </StrictMode>,
)
