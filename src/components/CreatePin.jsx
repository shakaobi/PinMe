import React, {useState} from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import {client} from '../container/client';

import Spinner from './Spinner';
import { categories } from '../utils/data';

const CreatePin = ({user}) => {
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');
  const [destination, setDestination] = useState('');
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState(null);
  const [category, setCategory] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [wrongImageType, setWrongImageType] = useState(false)

  const navigate = useNavigate();
  return (
    <div className='flex flex-col justify-center items-center mt-5 lg:h-4/5'>
      {fields && (
        <p className='text-red-500 mb-5 text-xl transition-all duration-150 ease-in'>Please add all fields</p>
      )}
      <div className='flex lg:flex-row flex-col justify-center items-center bg-white lg:p-5 p-3 lg:w4/5 w-full'>
        <div className='bg-secondaryColor p-3 flex-0.7 w-full'>
          <div className='flex justify-center items-center flex-col border-2 border-dotted border-gray-300 p-3 w-full h-420'>
            {loading && (
              <Spinner />
            )}
            {
              wrongImageType && (
                <p>It&apos;s wrong file type.</p>
              )
            }
          {!imageAsset ? (
            <label>
              <div className='flex flex-col items-center justify-center h-full'>
                <div className='flex flex-col justify-center items-center'>
                  <p className='text-lg'> Click to upload</p>
                </div>
                  <p className='mt-32 text-gray-400'>
                    !!! use high quality images or TIFF less than 200MB
                  </p>
              </div>
              <input
                type='file'
                name='upload-image'
                onChange={uploadImage}
                className='w-0 h-0'
              />
            </label>
          ) : (
            <div className='relative h-full'>
              <img
                src={imageAssest?.url}
                alt='upload-pic'
                className='h-full w-full'
                />
              <button
                type='button'
                className='absolute bottom-3 right-3 p-3 rounded-full bg-white text-xl cursor-pointer outline-none hover:shadow-md transition-all duration-500 ease-in-out'
                onClick={() => setImageAsset(null)}
              >
                <MdDelete/>
              </button>
            </div>
          )}
          </div>
        </div>
        <div className='flex flex-1 flex-col gap-6 lg:pl-5 mt-5 w-full'>
          <input
            type='text'
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
            placeholder='Add your title'
            className='outline-none text-2xl sm:text-3xl font-bold border b-2 border-gray-200 p-2'
          />
          {user &&(
            <div className='flex gap-2 mt-2 mb-2 items-center bg-white rounded-lg'>
              <img
                src={user.image}
                className='w-10 h-10 rounded-full'
                alt='user-profile'
              />
              <p className='font-bold'>{user.userName}</p>
            </div>
          )}
          <input
            type='text'
            value={about}
            onChange={(e)=> setAbout(e.target.value)}
            placeholder='Tell everyone what your pin is about'
            className='outline-none text-base sm:text-lg border-b-2 border-gray-200 p-2'
          />
          <div className='flex flex-col'>
            <div>
              <p className='mb-2 font-semibold text:lg sm:text-xl'> Choose Pin Category</p>
              <select
              onChange={(e)=>{
                setCategory(e.target.value);
              }}
              className='outline-none w-4/5 text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer'
              >
                <option value='others' className='sm:text-bg bg-white'>
                  Select Category
                </option>
                {categories.map((item)=>(
                  <option className='text-base border-0 outline-none capitalize bg-white text-black' value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className='flex justify-end items-end mt-5'>

            </div>
          
          </div> 
        </div>

      </div>

    </div>
  )
}

export default CreatePin;