import React, {useState, useEffect} from 'react';
import { MdDownloadForOffline } from 'react-icons/md';
import {Link, useParams} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'

import {client, urlFor}from '../container/client';
import MasonryLayout from './MasonryLayout';
import {pinDetailMorePinQuery, pinDetailQuery} from '../utils/data';
import Spinner from './Spinner';
import { isHtmlElement } from 'react-router-dom/dist/dom';

const PinDetail = ({user}) => {
  const {pinId} = useParams();
  const [pins, setPins] = useState();
  const [pinDetail, setPinDetail] = useState();
  const [comment, setComment] = useState('');
  const [addingComment, setAddingComment] = useState(false);

  
  return (
    <>
      {pinDetail && (
        <div className='flex xl:flex-row flex-col m-auto bg-white' style={{maxWidth:'1500px', borderRadius: '32px'}}>
          <div className='flex justify-center items-center md:items-start flex-initial'>
            <img
              className='rounnded-t-3xl rounded-b-lg'
              onScroll={(pinDetail?.image && urlFor(pinDetail?.image).url())}
              alt='user-post'
            />
          </div>
          <div className='w-full p-5 flex-1 xl:min-w-620'>
            <div className='flex items-center justify-between'>
              <div className='flex gap-2 items-center'>
                <a
                href={`${pinDetail.image.asset.url}?dl=`}
                download
                className='bg-secondaryColor p-2 text-xl rounded-full flex items-center justify-center text-dark opacity-75 hover:opacity-100'
                >
                  <MdDownloadForOffline/>
                </a>
              </div>
              <a href={pinDetail.destination} target='_blank'
                rel='noreferrer'
              >
              {pinDetail.destination?.slice(8)}
              </a>
            </div>
            <div>
              <h1 className='text-4xl font-bold break-words mt-3'>
                {pinDetail.title}
              </h1>
              <p className='mt-3'>{pinDetail.about}</p>
            </div>
            <Link to={`/user-profile/${pinDetail?.postedBy._id}`}
              className='flex gap-2 mt-5 items-center bg-white rounded-lg'
              >
                <img
                src={pinDetail?.postedBy.image}
                className='w-10 h-10 rounded-full'
                alt='user-profile'
                />
                <p className='font-bold'>
                  {pinDetail?.postedBy.userName}
                </p>
            </Link>
            <h2 className='mt-5 text-2xl'> Comments</h2>
            <div className='max-h-370 overflow-y-auto'>
              {pinDetail?.comments?.map((item)=>(
                <div className='flex gap-2 mt-5 items-center bg-white rouinded-lg' key={item.comment}>
                  <img
                    src={ item.postedBy?.image}
                    className='w-10 h-10 rounded-full cursor-pointer'
                    alt='user-profile'
                  />
                  <div className='flex flex-col'>
                    <p className='font-bold'>{item.postedBy?.userName}</p>
                    <p>{item.comment}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className='flex flex-wrap m-6 gap-3'>
              <Link to={user.image}
              className='w-10 h-10 rounded-full cursor-pointer'
              alt='user-profile'
              >
              </Link>

            </div>
      )}
    </>
  )
}

export default PinDetail;