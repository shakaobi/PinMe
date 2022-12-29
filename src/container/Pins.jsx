// main view that displays all the images 
import React, {useState} from 'react'
import {Navbar, Feed, PinDetail, CreatePin, Search } from '../components'
import { Routes , Route} from 'react-router-dom'
const Pins = ({user}) =>{
  const [searchTerm, setSearchTerm] = useState('')
  // we want to share this across the application 
  return (
    <div className='px-2 md:px-5'>
      <div className='bg-gray-50'>
        <Navbar searchTerm={searchTerm} setsearchTerm={setSearchTerm} user={user && user}/>
      </div>
      <div className='h-full'>
        <Routes>
          <Route path='/' element={<Feed/>}/>
          <Route path='/category/:categoryId' element={<Feed/>}/>
          <Route path='/pin-detail/:pinId' element={<PinDetail user={user && user}/>}/>
          <Route path='/create-pin' element={<CreatePin user={user && user}/>}/>
          <Route path='/search' element={<Search searchTerm={searchTerm} setsearchTerm={setSearchTerm}/>}/>
        </Routes>
      </div>
    Pins
    </div>
  )
}

export default Pins