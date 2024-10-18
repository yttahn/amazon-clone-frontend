import React from 'react';
import MyCarousel from '../../Components/Carousel/MyCarousel';
import Category from '../../Components/Category/Category';
import Product from '../../Components/Product/Product';
import Layout from '../Layout/Layout'

function Landing () {
    return (
        <Layout>
            <MyCarousel />
            <Category />
            <Product />
        </Layout>
    );
}

export default Landing;
