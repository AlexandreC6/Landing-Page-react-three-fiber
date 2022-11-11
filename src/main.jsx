import React from 'react'
import ReactDOM from 'react-dom/client'
import Pizzas from './Pizzas.jsx'
import Overlay from './layout/Overlay.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Pizzas />
    <Overlay />
  </React.StrictMode>
)
