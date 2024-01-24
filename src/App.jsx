// import { useState } from 'react'
import './App.css'
import CodeList from './components/CodeList'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='h-screen font-mono text-black'>
      <Navbar />
      <CodeList />
    </div>
  )
}

export default App
