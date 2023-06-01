import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const ComingSoon = () => {
    return (
        <>
            <Navbar />
            <div className='pt-[20%] text-center'>
                <p className='text-2xl'>Coming Soon... Watch this space</p>
                <Link to={'/'}>Go Back To Home</Link>
            </div>
        </>
    )
}

export default ComingSoon