import React, {useState, useEffect} from 'react';
import { MdDownloadForOffline } from 'react-icons/md';
import {Link, useParams} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'

import {client, urlFor}from '../container/client';
import MasonryLayout from './MasonryLayout';
import {pinDetailMorePinQuery, pinDetailQuery} from '../utils/data';
import Spinner from './Spinner';

const PinDetail = ({user}) => {
  const {pinId} = useParams();
  
  return (
    <div>PinDetail</div>
  )
}

export default PinDetail;