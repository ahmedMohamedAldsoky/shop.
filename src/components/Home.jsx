
import ProductCard from './ProductCard'




function Home( {products , categories , getProductsByCategory ,  getProducts} ) {






  return (
    <section className='py-5'>
        <div className='container'>

          <div className='d-flex justify-content-center mb-5'>
          <button className='btn btn-dark mx-2' onClick={ ()=>{ getProducts()} } >
                 ALL products
                  </button>
            {
              categories && categories.map((category)=>{
                return(<button className='btn btn-dark mx-2' onClick={ ()=>{ getProductsByCategory(category)} } >
                 {category}
                  </button>)
              })
            }
            
          </div>

            <div className='row'>

{
  products.map((prod)=>{
    return(<ProductCard key={prod.id}  product ={prod}/>)
  })
}

            </div>

        </div>
    </section>
  )
}

export default Home