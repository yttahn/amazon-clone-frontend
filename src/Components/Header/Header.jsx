import React, { useContext } from "react";
import classes from "./Header.module.css";
import AmazonLogo from "../../assets/amazon_logo.png";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/firebase";

function Header() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  // console.log(basket.length);

  return (
    <section className={classes.fixed}>
      <div className={classes.header_container}>
        <div className={classes.header_image}>
          <Link to="/">
            <img
              src={AmazonLogo}
              alt="descrAmazon logo"
              width="100"
              height="48"
            />
          </Link>
        </div>

        <div className={classes.header_delivery_add}>
          <div>
            <SlLocationPin />
          </div>
          <div>
            <p>Delivering to Lebu area</p>
            <p className={classes.bold_text}>Update Location</p>
          </div>
        </div>

        <div className={classes.header_search}>
          <select>
            <option value="All">All</option>
          </select>
          <input type="text" />
          <BsSearch size={25} />
        </div>

        <div className={classes.user_info}>
          <div className={classes.user_language}>
            <span className="fi fi-us"></span>
            <select>
              <option value="EN">EN</option>
            </select>
          </div>
          <Link to={!user && "/Auth"} className={classes.user_account}>
            <div>
              {user ? (
                <>
                  <p>Hello {user?.email?.split("@")[0]}</p>
                  <span onClick={() => auth.signOut()}>Sign out</span>
                </>
              ) : (
                <>
                  <p>Hello, Sign in</p>
                  <p className={classes.bold_text}>Accounts and Lists</p>
                </>
              )}
            </div>
          </Link>
          <Link to="/Orders" className={classes.user_order}>
            <p>Returns</p>
            <p className={classes.bold_text}>& Orders</p>
          </Link>
          <Link to="/Cart" className={classes.user_cart}>
            <BiCart size={35} />
            <span>{totalItem}</span>
          </Link>
        </div>
      </div>
      <LowerHeader />
    </section>
  );
}

export default Header;
