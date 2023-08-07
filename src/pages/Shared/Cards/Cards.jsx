import React, { useEffect, useState } from 'react';
import AllCards from '../AllCards/AllCards';
import Hire from '../../Hire';

const Cards = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://chefs-hunter-server-jamiulislam10.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div>

        
         <h4 className='text-center mt-3 mb-3 text-blue-700 text-5xl font-bold'>Brand new <span className='text-red-700'>Chefs</span>  </h4>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  '>
            {
                categories.map(category => <AllCards
                key={category.id}
                category= {category}
                
                ></AllCards>)
                    
                
            }
        </div> 
        <Hire></Hire>
    </div>
    );
};

export default Cards;