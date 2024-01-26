// import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import CodeList from './components/CodeList'
import Navbar from './components/Navbar'
import Component1 from './pages/Component1'


function App() {

  return (
    <div className='h-screen text-black'>
      <Navbar />
        <Routes>
          <Route path='/' element={<CodeList />} exact />
          <Route path='/playground/Component1' element={<Component1 />} exact />
        </Routes>
    </div>
  )
}

export default App
