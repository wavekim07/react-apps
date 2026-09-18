import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Practice from './Practice.jsx'
import Unit from './Unit.jsx'
import Title from './shape/Title.jsx'
import Shape2 from './shape/Shape2.jsx'
import Users from './shape/Users.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Shape2 />
  </StrictMode>,
)
