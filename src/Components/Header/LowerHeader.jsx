import React from 'react';
import classes from'./LowerHeader.module.css'
import { AiOutlineMenu } from "react-icons/ai";

function LowerHeader () {
    return (
        <>
            <div className={classes.LHeader_container}>
                <div className={classes.left_container}>
                    < AiOutlineMenu/>
                    <p>All</p>
                </div>

                <div className={classes.middle_container}>
                    <ul>
                        <li><select><option value="All">Medical Care</option></select></li>
                        <li><select><option value="All">Groceries</option></select></li>
                        <li>Best Sellers</li>
                        <li>Amazon Basics</li>
                        <li>New Releases</li>
                        <li><select><option value="All">Prime</option></select></li>
                        <li>Music</li>
                        <li>Customer Service</li>
                        <li>Today's Deals</li>
                        <li>Amazon Home</li>
                        <li>Registry</li>
                        <li>Books</li>
                    </ul>
                </div>

                <div className={`${classes.right_container}`}>
                    <p>Celebrate National Small Business Month</p>
                </div>
            </div>
        </>
    );
}

export default LowerHeader;
