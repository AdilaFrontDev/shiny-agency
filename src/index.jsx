import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


import Home from './pages/Home/index'
import Survey from './pages/Survey/index'
import Result from './pages/Result/index'
import Freelance from './pages/Freelance'

import Header from './components/Header/index'
import Error from './components/Error/index'
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Survey/:questionNumber" element={<Survey />} />
        <Route path="/Result/" element={<Result />}/>
        <Route path="/Freelance/" element={<Freelance />}/>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
