import React, {useState, useEffect} from 'react';
import { MdDownloadForOffline } from 'react-icons/md';
import {Link, useParams} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'

import {client, urlFor}from '../container/client';
import MasonryLayout from './MasonryLayout';
import {pinDetailMorePinQuery, pinDetailQuery} from '../utils/data';
const PinDetail = ({user}) => {
  return (
    <div>PinDetail</div>
  )
}

export default PinDetail;