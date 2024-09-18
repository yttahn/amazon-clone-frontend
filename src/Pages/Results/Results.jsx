import React, { useEffect, useState } from 'react';
import classes from './Results.module.css'
import Layout from '../Layout/Layout';
import { useParams } from 'react-router-dom';
import { productUrl } from '../../Components/Api/Endpoints';
import axios from "axios"
import ProductCard from '../../Components/Product/ProductCard';
import Loader from "../../Components/Loader/Loader";

function Results () {

    const {categoryName} = useParams()
    const[results, setResults] = useState();
    const[isLoading, setIsLoading] =useState (false)

    useEffect(() => {
        setIsLoading(true)
        axios.get(`${productUrl}/products/category/${categoryName}`)
        .then((res)=> {
            setResults(res.data)
            console.log(res.data) 
            setIsLoading(false)
        })
        .catch((err)=>{
            console.log(err)
            setIsLoading(false)
        })
    }, []);

    return (
        <>
        {isLoading?(<Loader/>):(
            <Layout>
                <section>
                    <h1 style={{padding: "30px"}}>Results</h1>
                    <p style={{padding: "30px"}}>Category/{categoryName}</p>
                    <br />
                    <div className = {classes.products_container}>
                        {results?.map((product)=>(
                            <ProductCard
                                key = {product.id}
                                product ={product}
                                renderDesc={false}
                                renderAdd = {true}
                            />
                        ))}
                    </div>
                </section>
            </Layout>)}
        </>
    );
}

export default Results;
