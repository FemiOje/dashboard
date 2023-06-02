import React from 'react';
import { Link } from 'react-router-dom';
import ComingSoonGif from '../assets/images/coming-soon.gif';
// import Navbar from './Navbar';

const ComingSoon = () => {
    return (
        <div className='h-screen bg-white'>
            {/* <Navbar /> */}
            <div className='text-center bg-white pt-10'>
                <img src={ComingSoonGif} className="m-auto md:w-[30vw] md:h-[40vh]" alt="coming-soon" />
                <p className='text-2xl mb-5 p-3'>Coming Soon...</p>
                <p>Please check back later</p>
                <Link to={'/'} className='text-blue-700 font-semibold'>Back To Homepage</Link>
            </div>
        </div>
    )
}

export default ComingSoon