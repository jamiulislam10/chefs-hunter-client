import React from 'react';

const DetailsInfo = ({card}) => {
    const {name,id,experience,recipes,likes,photo}= card;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={photo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default DetailsInfo;