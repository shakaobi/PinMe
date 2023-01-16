import React,{useState, useEffect} from 'react';
import {AiOutlineLogout} from 'react-icons/ai'
import { useParams, useNavigate } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';

import {userCreatedPinsQuery, userQuery, userSavedPinsQuery } from '../utils/data';
import {client} from '../container/client'
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';


function UserProfile() {
  const [user, setUser] = useState();
  const [pins, setPins] = useState();
  const [text, setText] = useState('created');
  const [activeBtn, setActiveBtn] = useState('created');
  const navigate = useNavigate();
  const { userId} = useParams();

  const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
  useEffect(()=> {
    const query = userQuery(userId);
    client.fetch(query).then((data) =>{
      setUser(data[0]);
    });
  }, [userId]);
  useEffect(() => {
    if(text === 'Created'){
      const createdPinsQuery = userCreatedPinsQuery(userId);
      client.fetch(createdPinsQuery).then((data) =>{
        setPins(data)
      });
    }else{
      const savedPinsQuery = userSavedPinsQuery(userId);
      client.fetch(savedPinsQuery).then((data) =>{
        setPins(data)
      })
    }
  }, [text, userId]);
  if(!user) return <Spinner message='Loading profile' />

  return (
    <div className='relative pb-2 h-full justify-center items-center'>
      <div className='flex flex-col pb-5'>
        <div className='flex flex-col justify-center items-center'>
          <img
            className='w-full h-370 2xl:h-510 shadow-lg object-cover'
            src={user.image}
            alt='user-pic'
          />


        </div>

      </div>

    </div>
  )
}

export default UserProfile;