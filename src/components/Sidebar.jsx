import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import {RiHomeFill} from 'react-icons/ri';
import { IoIosArrowForward} from 'react-icons/io';
import pinIcon from '../assets/pinIcon.png';
import { categories } from '../utils/data';
const Sidebar = ({ user, closeToggle }) => {
  const isNotActiveStyle = 'flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitilize-text';
  const isActiveStyle = 'flex items-center px-5 gap-3 font-extrabold border-r-2 border-black transition-all duration-200 ease-in-out capitilize-text';
  //two functions to toggle the sidebar
  

  //categories using. Will be changed later
  const handleCloseSidebar = () => {
    if(closeToggle) closeToggle(false);

  }
  //want to call ^ function when toggle is closed in home
  return (
    <div className='flex flex-col justify-beetween bg -white h-full overflow-y-scrikk min-w-210 hide-scrollbar'>
      <div className='flex felx-col'>
        <Link
        to='/'
        className='flex px-5 gap-2 my-6 pt-1 w-190 items-center'
        >
        <img src={pinIcon} alt='Icon' className='w-full'/>
        </Link>
        <div className='flex flex-col gap-5'>
          <NavLink
          to='/'
          className={({isActive})=> isActive ? isActiveStyle : isNotActiveStyle}
          // this will  change the styling of the Sidebar appearance open/closed
          onClick={handleCloseSidebar}
          >
            <RiHomeFill/>
            {/* Just a icon from react */}
            Home
          </NavLink>
          <h3 className='mt-2 px-5 text-base 2xl:text-xl'> Discover Categories</h3>
          {categories.slice(0,categories.length -1).map((category)=>(
            // mapping through the different category names
            <NavLink
              to={`/category/${category.name}`}
              className={({isActive}) => (isActive ? isActiveStyle : isNotActiveStyle)}
              onClick={handleCloseSidebar}
              key={category.name}
              >
              <img src={category.image} className='w-8 h-8 rounded-full shadow-sm'/>
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>
      {/* if there is a user, show user, if not redirect */}
      {user && (
        <Link
        to={`user-profile/${user._id}`}
        className='flex my-5 mb-3 gap-2 p-2 items-center bg-white rounded-lg shadow-lg mx-3'
        onClick={handleCloseSidebar}
        >
         <img src={user.image} className='w-10 h-10 rounded-full' alt='user-profile' />
         <p>{user.userName}</p>
         <IoIosArrowForward/>
        </Link>
      )}
    </div>
  )
}

export default Sidebar;