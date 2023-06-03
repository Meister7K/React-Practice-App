import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Head from './components/home/head/Head'
import {Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
     <Routes>
            <Route path='/' element={<Head/>}>
            </Route>
        </Routes>
    </>
  )
}

export default App
