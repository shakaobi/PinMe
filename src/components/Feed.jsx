import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { client } from '../container/client';
// import * as Loader from "react-loader-spinner";
// import Loader from 'react-loader-spinner';
import { feedQuery, searchQuery } from '../utils/data';
import MasonryLayout from './MasonryLayout.jsx';
import Spinner from './Spinner';

const Feed = () => {
  const [loading, setLoading] = useState(false)
  const [pins, setPins] = useState()
  const { categoryId } = useParams();

  useEffect(() => {
    
    if(categoryId){
      setLoading(true);
  //     // using the query from data.js to search for certain pins 
      const query = searchQuery(categoryId);
      client.fetch(query).then((data)=>{
        setPins(data);
        setLoading(false)
      })
    }else{
      setLoading(true);
      client.fetch(feedQuery).then((data)=>{
  //       setPins(data);
  //       setLoading(false)
      })
    }
  }, [categoryId])
  
  if(loading) return <Spinner message='Loading your new ideas!'/>

  return (
    <div>
      {pins && (<MasonryLayout pins={pins}/>)}
    </div>
  )
}

export default Feed;