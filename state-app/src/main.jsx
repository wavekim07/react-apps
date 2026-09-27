import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import StateBasic from './StateBasic.jsx'
import StateProps from './StateProps.jsx'
import StateTest from './StateTest.jsx'
import StateObject from './StateObject.jsx'
import StateArray from './StateArray.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StateArray />
  </StrictMode>,
)
