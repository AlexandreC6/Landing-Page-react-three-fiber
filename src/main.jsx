import React from 'react'
import ReactDOM from 'react-dom/client'
import Jordans from './Jordans.jsx'
import Overlay from './layout/Overlay.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Jordans />
    <Overlay />
  </React.StrictMode>
)
