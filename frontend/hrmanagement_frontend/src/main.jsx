import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>  
    <App />
    </BrowserRouter>  
  </StrictMode>,
)

import home from './pages/home.jsx'
import contact from './pages/contact.jsx' 
import about from './pages/about.jsx'
import {Routes,Route} from 'react-router-dom'