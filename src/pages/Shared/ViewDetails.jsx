import React, { useEffect, useState } from 'react';
// import { useParams } from "react-router-dom"
import { useLoaderData } from "react-router-dom"
import Navbar from './Navbar/Navbar';
import Swal from 'sweetalert2'
const ViewDetails = () => {
  const news = useLoaderData();
  const { name, sell, experience, recipes, likes, photo, description, recipe, rating, methHood, } = news.selectedNews;
  console.log(news);
  const [open, setOpen] = useState(true);
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(true);

  const handleAccepted = event => {
    if (open) {
      setOpen(event.target.checked)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      return
    }
    else {
      return
    }
  }

  const handleAccepted1 = event => {
    if (open) {
      setOpen1(event.target.checked)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      return
    }
  }
  const handleAccepted2 = event => {
    if (open) {
      setOpen2(event.target.checked)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      return
    }
  }
  return (

    <div>

      <div className="card w-96 h-100 bg-base-100 shadow-xl ml-96 mt-6">
        <figure><img className='w-full' src={photo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>likes: {likes}</p>
          <p>recipes of number: {recipes}</p>
          <p>experience: {experience}</p>
        </div>
      </div>
      <div className='grid grid-cols-3 ml-40 mt-6 '>
        <div>
          <div className="card w-56  bg-base-100 shadow-xl">
            <figure><img src={recipe[0].image} /></figure>
            <div className="card-body">
              <h2 className="card-title">name: {recipe[0].recName}</h2>
              <p> rating: {recipe[0].rating}</p>
              <p>cooking method :{recipe[0].methHood}</p>
              <p>sell :{recipe[0].sell}</p>
              <div className="card-actions justify-end">
                <div onClick={handleAccepted}>
                  <button className='btn btn-primary' disabled={!open} >
                    Favorite
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card w-56  bg-base-100 shadow-xl">
            <figure><img src={recipe[1].image} /></figure>
            <div className="card-body">
              <h2 className="card-title">name: {recipe[1].recName}</h2>
              <p> rating: {recipe[1].rating}</p>
              <p>cooking method :{recipe[1].methHood}</p>
              <p>sell :{recipe[1].sell}</p>
              <div className="card-actions justify-end">
              <div onClick={handleAccepted1}>
                  <button className='btn btn-primary' disabled={!open1} >
                    Favorite
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card w-56  bg-base-100 shadow-xl">
            <figure><img src={recipe[2].image} /></figure>
            <div className="card-body">
              <h2 className="card-title">name: {recipe[2].recName}</h2>
              <p> rating: {recipe[2].rating}</p>
              <p>cooking method :{recipe[2].methHood}</p>
              <p>sell :{recipe[2].sell}</p>
              <div className="card-actions justify-end">
              <div onClick={handleAccepted2}>
                  <button className='btn btn-primary' disabled={!open2} >
                    Favorite
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>




  );

}


export default ViewDetails;