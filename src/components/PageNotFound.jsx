import React from 'react';
import Navbar from './Navbar';
import PageNotFoundGif from '../assets/images/page-not-found.gif';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className='bg-[#DAF0FF] h-screen text-center'>
      <Navbar />

      <img src={PageNotFoundGif} alt="page-not-found" className='m-auto w-[100vw] h-[100vh]' />

      <div className="absolute bottom-[2vh] w-full ml-auto">
        <p className='text-xl text-semibold m-5'>This page does not exist</p>
        <Link to={'/'} className='text-blue-700 font-semibold m-5'>Back To Homepage</Link>
      </div>
    </div>
  )
}

export default PageNotFound;