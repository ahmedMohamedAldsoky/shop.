import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Details from "./components/Details";
import { Route , Routes } from "react-router-dom";

import React , {useState , useEffect} from "react";
import axios from "axios";

function App() {
    const [products , setProducts] = useState([]);
    const [categories , setCategories] = useState([]);

   
  
      const getProducts = async ()=>{
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data)
    }

      const getCategories = async ()=>{
      const response = await axios.get('https://fakestoreapi.com/products/categories');
      setCategories(response.data)
    }
      const getProductsByCategory = async (category)=>{
      const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
      setProducts(response.data)
    }



// useEffect( ()=>{} )
useEffect( ()=>{
    getProducts()
    getCategories()
} , [] )  

  return (
    <div>
      <Navbar/>

<Routes>
      <Route path="/"  element={<Home products = {products} 
       categories={categories} 
       getProductsByCategory={getProductsByCategory}  getProducts={ getProducts}/>} />
      <Route path="/details/:id"  element={<Details/>} />
</Routes>
    
      <Footer/>
    </div>
  );
}

export default App;