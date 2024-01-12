import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Mainlayout from './Layout/Mainlayout/mainlayout'
import Home from './Pages/Home/home'
import Aboutus from './Pages/AboutUs/aboutus'
import Blog from './Pages/Blog/blog'
import Contact from './Pages/Contact/contact'
import Portfolio from './Pages/Portfolio/portfolio'
import Services from './Pages/Services/services'
import Testminiols from './Pages/Testimonials/testimonials'
import Addp from './Pages/AddPage/addp'
import Detail from './Pages/Detail/detail'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Mainlayout/>}>
        <Route index element={<Home/>}></Route>
        <Route path='/aboutus' element={<Aboutus/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/portfolio' element={<Portfolio/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/testiminoals' element={<Testminiols/>}></Route>
        <Route path='/addp' element={<Addp/>}></Route>
        <Route path='/:id' element={<Detail/>}></Route>
      </Route>
     </Routes>
    </>
  )
}

export default App
