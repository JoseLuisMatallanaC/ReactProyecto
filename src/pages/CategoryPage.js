import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CarD from "../components/CarD";


const Category = () => {
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
            fetch('https://dummyjson.com/products?limit=15')
            .then(res =>res.json())
            .then(json => {
                setUsers(json.products);
                console.log(json.products);
                setProduct(json.products.filter((user) => {
                    return user.category === categoryId;
                  }));
                console.log(product);
            })
            .finally('')
            .catch(err => console.log('Error: ' + err));
            setIsLoad(true);
        }
        return (product.map(u =>
        <CarD key={u.id} id={u.id} cardTitle={u.title} cardPrice={u.price} 
        cardfeatures1={u.brand} cardfeatures2={u.category}
        cardfeatures3={u.stock} cardfeatures4={u.description}/>));
    }
    catch(error){
    return(<p>{error.message}</p>);
    }
};
export default Category;