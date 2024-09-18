import React from 'react';
import classes from './Category.module.css'
import { Link } from 'react-router-dom';

function CategoryCard ({data}) {
    
    return (
        <div className ={classes.category}>
            <Link to ={`/category/${data.name}`}>
                <span>
                    <h3>{data.title}</h3>
                </span>
                <img className ={classes.image} src={data.imgLink} alt="" />
                <p>Show now</p>
            </Link>
        </div>
    );
}

export default CategoryCard;

