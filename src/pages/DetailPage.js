import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CarD from "../components/CarD";


const Detail = () => {
    const [categoria,setCategoria] = useState([]); 
    const [product,setProduct] = useState([]); 
    const [users,setUsers] = useState([]);
    const [isLoad,setIsLoad] = useState(false);

    let { categoryId } = useParams(); 
    try{
        if(categoria == null | categoria != categoryId){
            setCategoria(categoryId);
            setIsLoad(false);
        }
        if(!isLoad){
            fetch(`https://dummyjson.com/products/${categoryId}`)
                  .then(res =>res.json())
                  .then(json => {
                    setUsers(json);
                    console.log(json);
                  })
                  .finally('')
                  .catch(err => console.log('Error: ' + err));
                  setIsLoad(true);
        } 
        return ( 
            <CarD key={users.id} id={users.id} cardTitle={users.title} cardPrice={users.price} 
            cardfeatures1={users.brand} cardfeatures2={users.category}
            cardfeatures3={users.stock} cardfeatures4={users.description}/>);
    }
    catch(error){
        return(<p>{error.message}</p>);
    }
};
export default Detail;