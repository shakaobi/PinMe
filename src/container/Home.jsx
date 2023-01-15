import React,{useState, useRef, useEffect} from 'react';
import {HiMenu} from 'react-icons/hi';
import { AiFillCloseCircle} from 'react-icons/ai';
import {Link, Route, Routes } from 'react-router-dom';
import {Sidebar, UserProfile }from '../components';
import { client } from './client';
import pinIcon from '../assets/pinIcon.png';
import Pins from './Pins';

import { userQuery } from '../utils/data';
import { fetchUser } from '../utils/fetchUser';
// home page will contain a main section that display pictures 
const Home = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [user, setUser] = useState();
  const scrollRef = useRef(null);
  //hooks
  const userInfo = fetchUser();

  useEffect(() => {
    const query = userQuery(userInfo?.googleId);
    client.fetch(query).then((data) =>{
      setUser(data[0])//getting one specific user
    });
  }, []);
  //writing s sanity query from utils
  //query user based on googleId from profileId
  useEffect(() => {
    scrollRef.current.scrollTo(0,0);
  },[]);
//setting the scroll to be at the top of the page
  
  return (
    <div className= 'flex bg-gray-50 md:flex-row flex-col h-screem transition-height duration-75 ease-out'>
      {/* this is mobile sidebar*/}
      <div className='hidden md:flex h-screen flex-initial'>
        <Sidebar user={user && user}/> 
        {/* if this is the user, let them pass, else not */}
      </div>
      <div className='flex md:hidden flex-row'>
        <div className='p-2 w-full flex flex-row justify-between items-center shadow-md'>
          <HiMenu fontSize={40} className='cursor-pointer' onClick={() => setToggleSidebar(true)}/>
          <Link to='/'>
          <img src={pinIcon} alt='icon' className='w-28'/>
          </Link>
          <Link to={`user-profile/${user?._id}`}>
          <img src={user?.image} alt='user-pic' className='w-9 h-9 rounded-full' referrerPolicy="no-referrer"/>
          
          </Link>
        </div>
        {toggleSidebar &&(
          <div className='fixed w-4/5 bg-white overflow-y-auto shadow-md z-10 animate-slide-in'>
            {/* can toggle side bar and close it with icon */}
            <div className='absolute w-full flex justify-end items-center p-2'>
              <AiFillCloseCircle fonstSize={30} className='cursor-pointer' onClick={()=> setToggleSidebar(false)} />
            </div>
            <Sidebar closeToggle={setToggleSidebar} user={user && user}/>
            {/* This is for other devices */}
          </div>
        )}
      </div>
        <div className='pb-2 flex-1 h-screen overflow-y-scroll' ref={scrollRef}>
          {/* Here are the routes */}
          <Routes>
            {/* dynamic page with:userId */}
            <Route path='/user-profile:userId' element={<UserProfile/>}/>
            {/* if user exist */}
            <Route path='/*' element={<Pins user={user && user}/>}/>
          </Routes>
        </div>
    </div>
  )
}

export default Home;