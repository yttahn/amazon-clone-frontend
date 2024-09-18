import React, { useContext } from "react";
import LayOut from "../Layout/Layout.jsx";
import { DataContext } from "../../Components/DataProvider/DataProvider.jsx";
import ProductCard from "../../Components/Product/ProductCard.jsx";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat.jsx";
import { Link } from "react-router-dom";
import Classes from "./Cart.module.css";
import { Type } from "../../Utility/action.type.jsx";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
  // console.log(basket);

  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };
  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };
  return (
    <LayOut>
      <section className={Classes.container}>
        <div className={Classes.cart__container}>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr /> <br />
          {basket?.length == 0 ? (
            <p>Opps ! No item in your cart</p>
          ) : (
            basket?.map((item, i) => {
              return (
                <section className={Classes.cart_product}>
                  <ProductCard
                    key={i}
                    product={item}
                    renderDesc={true}
                    flex={true}
                    renderAdd={false}
                  />
                  <div className={Classes.btn_container}>
                    <button
                      className={Classes.btn}
                      onClick={() => increment(item)}
                    >
                      <IoIosArrowUp size={25} />
                    </button>
                    <span>{item.amount}</span>
                    <button
                      className={Classes.btn}
                      onClick={() => decrement(item.id)}
                    >
                      <IoIosArrowDown size={25} />
                    </button>
                  </div>
                </section>
              );
            })
          )}
        </div>
        {basket?.length !== 0 && (
          <div className={Classes.subtotal}>
            <div>
              <p>Subtotal ({basket?.length} items) </p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payments">Continue to checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart;
