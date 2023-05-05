import React from 'react';
import { Link } from 'react-router-dom';
import Hire from '../../Hire';
 
const AllCards = ({category}) => {
    const {name,id,experience,recipes,likes,photo,}= category;
    return (
   <div>
         <div className="card card-compact w-96 h-100 bg-base-100 shadow-xl ">
  <figure><img className='w-200 h-200' src={photo} alt="Shoes" /></figure>
  <div className="card-body text-center">
    <h2 className="card-title pl-28">Name: {name}</h2>
    <p className='font-medium'>recipes: {recipes}</p>
    <p className='font-medium'>likes: {likes}</p>
    <h1 className='font-medium'>experience: {experience}</h1>
    <div className="card-actions justify-end">
       <Link to={`/services/${category?.id}`}>
       <button className="btn btn-primary">View Recipes</button>
            </Link>
    </div>
  </div>
</div>
   </div>
    );
};

export default AllCards;