import React, { useEffect, useState } from 'react';
import AllCards from '../AllCards/AllCards';

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

        
         <h4 className='text-center'>Brand new Chefs</h4>
        <div className='grid grid-cols-3 gap-4 mt-4'>
            {
                categories.map(category => <AllCards
                key={category.id}
                category= {category}
                
                ></AllCards>)
                    
                
            }
        </div> 
    </div>
    );
};

export default Cards;