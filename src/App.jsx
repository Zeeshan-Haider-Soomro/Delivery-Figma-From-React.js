import React from 'react'
import Home from './components/Pages/Home'
import { Route, Routes } from 'react-router'
import About from './components/Pages/About'
import Contact from './components/Contact/Contact'
import Error from './components/Pages/Error'
import Services from './components/Pages/Services'
import OrderNow from './components/Pages/OrderNow'
import Header from './components/Header/Header'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contactUs' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/orderNow' element={<OrderNow/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      {/* <Home/> */}
    </div>
  )
}

export default App
