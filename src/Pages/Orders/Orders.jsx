import React, {useContext, useEffect, useState} from 'react';
import classes from './Orders.module.css'
import Layout from '../Layout/Layout';
import { db } from '../../Utility/firebase';
import { DataContext } from '../../Components/DataProvider/DataProvider';
import ProductCard from '../../Components/Product/ProductCard';

function Orders () {

    const [{user}, dispatch] = useContext(DataContext)
    const[order, setOrders] = useState([])

    useEffect(()=>{
        if(user){
            db.collection("users")
                .doc(user.uid)
                .collection("orders")
                .orderBy("created", "desc")
                .onSnapshot((snapshot)=>{
                    console.log(snapshot)
                    setOrders(
                        snapshot.docs.map((doc)=>({
                            id:doc.id,
                            data:doc.data()
                        }))
                    )
                })
        }else{
            setOrders([])

        }
    }, [])

    return (
        <Layout>
            <section className= {classes.container}>
                <div className= {classes.orders__container}>
                    <h2>Your Orders</h2>
                    {
                    order?.length == 0 && (
                        <div style={{padding:"20px"}}>
                            You dont have any orders
                        </div>
                    )}

                    {/* ordered items */}
                    <div>{
                        order?.map((eachorder, i)=>{
                            return (
                                <div  key = {i}>
                                    <hr/>
                                    <p>Order ID:{eachorder?.id}</p>
                                    {
                                        eachorder?.data?.basket?.map(border=>(
                                            <ProductCard
                                                flex={true}
                                                product={border}
                                                key = {border.id}
                                            />
                                        ))
                                    }
                                </div>
                            )
                        })
                    }</div>
                </div>
            </section>
        </Layout>

    );
}

export default Orders;
