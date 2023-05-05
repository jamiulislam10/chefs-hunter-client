import React from 'react';
import { HiMail } from "react-icons/hi";
const Hire = () => {
    return (
        <div className='mt-10 mb-10 '>
           <div  className='text-red-500 ml-28 mr-28'><hr /></div>

            <h1 className='text-center mt-3 mb-3 text-blue-700 text-3xl font-bold'>Hire Me</h1>
            <h1 className='text-center mt-3 mb-3 text-orange-700 text-2xl font-bold'>Jamiul</h1>
            <h1 className='text-center mt-3 mb-3 text-blue-700 text-1xl font-bold'>Available me ✧ For any help!
            </h1>
            <div className='text-center '>
                <button className=''> <HiMail className='text-4xl'></HiMail></button>

            </div>       
             </div>
    );
};

export default Hire;