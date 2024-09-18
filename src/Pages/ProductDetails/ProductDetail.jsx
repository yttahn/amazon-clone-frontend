import React , { useEffect, useState } from 'react';
import classes from './ProductDetail.module.css'
import Layout from '../Layout/Layout';
import { useParams } from 'react-router-dom';
import { productUrl } from '../../Components/Api/Endpoints';
import axios from "axios"
import ProductCard from '../../Components/Product/ProductCard';
import Loader from "../../Components/Loader/Loader";

function ProductDetail () {
    const params = useParams()
    const productId = params.productId;
    const url = `${productUrl}/products/${productId}`

    const[product, setProduct] = useState({});
    const[isLoading, setIsLoading] =useState (false)

    useEffect(() => {
        setIsLoading(true)
        axios.get(url)
        .then((res)=> {
            setProduct(res.data)
            setIsLoading(false)
        })
        .catch((err)=>{
            console.log(err)
            setIsLoading(false)
        })
    }, []);

    return (
        <Layout>
            {isLoading?(<Loader/>):(<ProductCard
                            key = {product.id}
                            product ={product}
                            flex = {true}
                            renderDesc={true}
                            renderAdd = {true}
            />)}
        </Layout>    )


}





// function ProductDetail () {
//     const {productId} = useParams()
//     const[product, setProduct] = useState();
//     console.log(productId)
//     useEffect(() => {
//         axios.get(`${productUrl}/products/${productId}`)
//         .then((res)=> {
//             setProduct(res.data)
//             console.log(res.data) 
//         })
//         .catch((err)=>{
//             console.log(err)
//         })
//     }, []);


//     return (
//         <Layout>
//                 <ProductCard product ={product}  />
//                 product detail
//         </Layout>
//     );
// }

export default ProductDetail;
