import React , {useState , useEffect} from "react";


import {useParams} from 'react-router-dom'

function Details() {
  const [product , setProduct] = useState([]);



  let params = useParams();


  useEffect( ()=>{
     fetch(`https://fakestoreapi.com/products/${params.id}`)
    .then(res=>res.json())
    .then(json=>setProduct(json))
} , [] )

  return (
    <section className='py-5 container'>
       <div className="row">
        <div className="col-md-6 mb-2">
          <h1>{product.title}</h1>
          <h3>{product.category}</h3>
          <h3>{product.price}</h3>
          <p>{product.description}</p>

        </div>


        <div className="col-md-6 mb-2">
        <img src={product.image} alt="" className='w-100' />
        </div>
        </div>   

    </section>
  )
}

export default Details