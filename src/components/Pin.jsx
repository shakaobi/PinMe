import React,{useState} from 'react'
import {client, urlFor} from '../container/client';
import {Link, Navigate, useNavigate} from 'react-router-dom'
import {v4 as uuidv4 } from 'uuid'
import { IoMdDownloadForOfline  } from 'react-icons/md';
import { AiTwotoneDelete } from 'react-icons/ai';
import {BdFillArrowUpRightCircleFill } from 'react-icons/md'
const Pin = ({pin: {postedBy, image, _id, destination}}) => {
  const [postHovered, setPostHovered] = useState(false)
  const [savingPost, setSavingPost] = useState(false)
  const navigate = useNavigate();
    return (
    <div className='m-2'>
        <div
            onMouseEnter={()=> setPostHovered(true)}
            onMouseLeave={()=> setPostHovered(false)}
            onClick={()=> navigate(`/pin-detail/${_id}`)}
            className='relative cursor-zoom-in w-auto hover:shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out'
        >
            {/* how sanity allow you to optimize the images when being fetched */}
            <img className='rounded-lg w-full' alt='user-post' src={urlFor(image).width(250).url()}/>
            {postHovered &&(
                <div
                    className='absolute top-0 w-full h-full flex flex-col justify-between p-1 pr-2 pb-2 z-50'
                >
                <div>
            )}
        </div>        
    </div>
  )
}

export default Pin