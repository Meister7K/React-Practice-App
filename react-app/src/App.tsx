import { useState } from 'react'

import './App.scss'
import {Routes, Route} from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Contact from './components/pages/contact/Contact';
import Projects from './components/pages/projects/Projects';


function App() {

  return (
    <>
     <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
