import CarD from "./CarD";
import React, { useState, useEffect } from 'react';

let arreglo =[];

function ListCarDs(){ 
  const [users,setUsers] = useState([]); 
  const [isLoad,setIsLoad] = useState(false);
 
  try{
    if(!isLoad){
      fetch('https://dummyjson.com/products?limit=15')
      .then(res =>res.json())
      .then(json => {
        setUsers(json.products);
      })
      .finally('')
      .catch(err => console.log('Error: ' + err));
      setIsLoad(true);
    } 
    return (users.map(u => 
      <CarD key={u.id} id={u.id} cardTitle={u.title} cardPrice={u.price} 
        cardfeatures1={u.brand} cardfeatures2={u.category}
        cardfeatures3={u.stock} cardfeatures4={u.description}/>));
  }
  catch(error){
    return(<p>{error.message}</p>);
  }
}

export default ListCarDs;