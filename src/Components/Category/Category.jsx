import React from 'react';
import {CategoryInfo} from '../../Utility/CategoryInfo'
import CategoryCard from './CategoryCard';
import classes from './Category.module.css'

function Category () {

    return (
        <section className = {classes.category__container}>
            {
            CategoryInfo.map((info)=> (
                <CategoryCard data = {info}/>
            ))}
        </section>
    );
}

export default Category;
