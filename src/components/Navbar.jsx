import React from 'react';
import {useNavigate, Link} from 'react-router-dom';
import {IoMdAdd, IoMdSearch} from 'react-icons/io';

const Navbar = ({searchTerm, setSearchTerm, user}) => {
  const navigate = useNavigate();
  if(!user) return null;
  //if not user is founde return nothing
  return (
    <div className='flex gap-2 md:gap-5 w-full mt-5 pb-7'>
      <div className='flex justify-start items-center w-full px-2 rounded-md bg-white border-none outline-none focus-within:shadow-sm'>
        <IoMdSearch fontSize={21} className='ml-1'/>
        <input 
        type='text'
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder='Search'
        value={searchTerm}
        onFocus={(e) => navigate('/search')}
        // move from one feed to search feed
        />
      </div>
    </div>
  )
}

export default Navbar;