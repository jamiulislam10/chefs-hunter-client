import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import DetailsInfo from './DetailsInfo/DetailsInfo';
import { data } from 'autoprefixer';

const ViewDetails = () => {
  const { id } = useParams();
  const [cards, setCards] = useState([])


  useEffect(() => {
    fetch(`http://localhost:5000/categories/${id}`)
      .then((res) => res.json())
      .then((data) => setCards(data))
    }, [])
  console.log(id);
  return (
    <div>
      <h4>jsl</h4>
      {
        data.map(dat => <DetailsInfo
         dat={dat}
        ></DetailsInfo>)
      }
    </div>


  );

}


export default ViewDetails;