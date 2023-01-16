import React,{useState useEffect} from 'react';
import {AiOutlineLogout} from 'react-icons/ai'
import { useParams, useNavigate } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';

import {userCreatedPinsQuery, userQuery, userSavedPinsQuery } from '../utils/data'
import {client} from '../container/client'
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';


function UserProfile() {
  const [user, setUser] = useState();
  const [pins, setpins] = useState();
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
    }
  }, [third])
  
  return (
    <div>UserProfile</div>
  )
}

export default UserProfile;