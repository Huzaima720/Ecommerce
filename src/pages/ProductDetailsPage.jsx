
import React , { useState , useEffect } from 'react'
import ProductDetails from '../components/ProductDetails'
import Products from '../components/Products'
import { useParams } from 'react-router-dom'



export default function ProductDetailsPage() {
  const [category, setCategory] = useState(null)
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setCategory(data.category);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);

      }
    };

    getProduct(); 
        

  }, [id]);


  return(
    <>
    
    <ProductDetails product={product} loading={loading} />;
    <Products type="related" category={category}/>

    </>
  )
    
}