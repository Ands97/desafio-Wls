import { Header } from './components/Header'

import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { useState } from 'react';

function App() {


  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
    </div>
  )
}

export default App
