import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import React from 'react'
import Home from './pages/Home/Home'
import Template from './components/Template/Template'

export const AppRoutes = () => {
    return (
        <Router>
              <Template>
            <Routes>
              
                <Route path="/" exact element={<Home/>}/>
                
            </Routes>
            </Template>

        </Router>
    )
}
