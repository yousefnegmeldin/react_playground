// import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import CodeList from './components/CodeList'
import Navbar from './components/Navbar'
import Component1 from './pages/Component1'
import Component2 from './pages/Component2'
import Component3 from './pages/Component3'

function App() {

  return (
    <div className='h-screen text-black'>
      <Navbar />
        <Routes>
          <Route path='/' element={<CodeList />} exact />
          <Route path='/playground/Component1' element={<Component1 />} exact />
          <Route path='/playground/Component2' element={<Component2 />} exact />
          <Route path='/playground/Component3' element={<Component3 />} exact />
        </Routes>
    </div>
  )
}

export default App
