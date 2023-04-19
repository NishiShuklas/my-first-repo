import React from "react";//Library that defines what component is and how multiple components work together

import ReactDOM from "react-dom/client";// Library that knows how to get component to show up in the browser
import App1 from './App1'

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)
root.render(<App1 />)

