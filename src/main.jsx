import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './pages/Home/index'
import Survey from './pages/Survey/Survey'
import Header from './components/Header/index'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Survey" element={<Survey />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
