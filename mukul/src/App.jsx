import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import TextAnimation from './components/TextAnimation'
import Loader from './components/Loader'


const App = () => {
  return (
    <div className='bg-custom-gradient min-h-screen relative  w-full h-screen'>
    <Navbar />
    
    <TextAnimation />
    <Loader />
      {/* <h1 className='text-white text-center font-Chromatica'> Hey, Mukul Goyal</h1> */}
      
    </div>
    
  )
}

export default App