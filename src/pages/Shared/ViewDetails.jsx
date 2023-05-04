import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import DetailsInfo from './DetailsInfo/DetailsInfo';

const ViewDetails = () => {
  const [cards, setCards] = useState([])
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/categories/${id}`)
      .then((res) => res.json())
      .then((data) => console.log(data.selectedNews))
  }, [])
  console.log(id);
  // return (
  //   <div>
  //     {
  //     cards.map(card => <DetailsInfo
  //     key={card.id}
  //     card = {card}
  //     ></DetailsInfo>)
  //     }
  //   </div>


  // );
  return <div>SEr</div>
}


export default ViewDetails;