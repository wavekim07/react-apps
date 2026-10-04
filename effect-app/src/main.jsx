import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SideEffect from './SideEffect.jsx'
import EffectTest from './EffectTest.jsx'
import Async from './Async.jsx'
import FetchData from './FetchData.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FetchData />
  </StrictMode>,
)
