import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {UglyContextProvider} from './UglyContext'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UglyContextProvider>
    <App />
  </UglyContextProvider>
)
