import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const ComingSoon = () => {
    return (
        <>
            <Navbar />
            <div className='pt-[20%] text-center'>
                <p className='text-2xl mb-5'>Coming Soon... Watch this space</p>
                <Link to={'/'} className='text-blue-700 font-semibold'>Go Back To Homepage</Link>
            </div>
        </>
    )
}

export default ComingSoon