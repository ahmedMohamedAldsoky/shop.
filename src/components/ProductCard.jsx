import React from 'react'
import {Link} from "react-router-dom";

function ProductCard({product}) {
  return (
    
    <div className='col-md-3 col-sm-6 mb-2'>
          <div className='card p-3 text-center'>
                <img src={product.image}/>
                <h4>{product.title}</h4>
                <h5>{product.category}</h5>
                <h5>{product.price}</h5>
                <Link to={`/details/${product.id}`} className='btn btn-primary'>Details</Link>
          </div>
      </div>
  )
}

export default ProductCard


