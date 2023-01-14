import React,{useState, useEffect} from 'react';
import {GoogleLogin} from 'react-google-login';
import jwt_decode from "jwt-decode";
import { gapi } from 'gapi-script';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import loginImage from '../assets/loginImage.mp4';
import pinIcon from '../assets/pinIcon.png';
import { client } from '../container/client';

const Login = () => {
  // const [ profile, setProfile ] = useState([]);
  const navigate = useNavigate();

  // useEffect((res) => {
  //   const start = () => {
  //     gapi.auth2.init({
  //       clientId: process.env.REACT_APP_GOOGLE_API_TOKEN,
  //       scope: ""
  //     })
  //   }
  //   gapi.load('client:auth2', start);
  // });

  const responseGoogle = (res) => {

    // try{
      console.log('this is the resObject:',res)
      // const decoded = jwt_decode(res.credentials)
      console.log('this is the resObject:',res.profileObj)
      // localStorage.setItem('user', JSON.stringify(decoded))
      localStorage.setItem('user', JSON.stringify(res.profileObj));
      // console.log('this is the resObject:',res.profileObj)
      //currently coming in undefined, this is supposed to get the token from google, decode it and allow user acces. If not, warning sign 
      //local storage an be found in API in browser.
      const { name, googleId, imageUrl } = res.profileObj;
      // const { name, googleId, imageUrl } = decoded;
      //gathering the three objects and greating them in the backend if authorized, if not, denied access.
      const doc = {
        _id:  googleId,
        _type: 'user',
        userName: name,
        image: imageUrl,
      }
      client.createIfNotExists(doc)
      .then(()=>{
        navigate('/', {replace: true})
        //userName and image can be found in the backend schemas
        //_id and _type can be found in browser when attempting to connect
      })
    // } catch (error) {
    //   return error;
    // };
  };
  return (
      <div className='flex justify-start items-center flex-col h-screen'>
        {/* using tailwind to specify my styling setting*/}
        <div className='relative w-full h-full'>
          {/*Using a video the loops with no sound as log in page */}
          <video
            src={loginImage}
            type='video/mp4'
            loop
            controls={false}
            muted
            autoPlay
            className='w-full h-full object-cover'
          />
        {/* <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}> */}
          <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
            {/*placing logo on top of video using tailwind styling  */}
              <div className='p-5'>
                  <img src={pinIcon} width='130px' alt='icon'/>
              </div>
              {/*When the google button is clcked, it grabs the API token. It will let you know what happens based on response */}
              <div>
              {/* {profile ? ( */}
                <GoogleLogin
                  clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
                  onSuccess={responseGoogle}
                  onError={() => {
                    console.log('Login Failed');
                  }}
                  cookiePolicy='single_host_origin' 
                />
                {/* // ):null} */}
              </div> 
          </div>
        {/* </GoogleOAuthProvider>  */}
        </div>  
      </div>
  );
};

export default Login;