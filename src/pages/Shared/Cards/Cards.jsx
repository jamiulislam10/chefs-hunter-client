import React, { useEffect, useState } from 'react';
import AllCards from '../AllCards/AllCards';
import Hire from '../../Hire';

const Cards = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div>

        
         <h4 className='text-center mt-3 mb-3 text-blue-700 text-5xl font-bold'>Brand news <span className='text-red-700'>Chefs</span>  </h4>
        
        <div className='grid grid-cols-3 gap-4 mt-4'>
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