import React from 'react'
import {urlFor} from '../container/client';
const Pin = ({pin: {postedBy, image, _id, destination}}) => {
  return (
    <div>
        {/* how sanity allow you to optimize the images when being fetched */}
        <img className='rounded-lg w-full' alt='user-post' src={urlFor(image).width(250).url()}/>
    </div>
  )
}

export default Pin