import React from "react";
import CartItem from "./CartItem";
import { useGlobalContext } from "../context/context";

const Cart = () => {
  const { products, deleteAll } = useGlobalContext();
  return (
    <>
      <div className="products-container">
        <div className="product">
          <p style={{width: "5%", marginLeft: "1rem", marginRight: "1rem"}}>Item</p>
          <p style={{width: "40%" , marginRight: "1rem"}}>Name</p>
          <p style={{width: "10%" , marginRight: "1rem"}}>Qty</p>
          <p style={{width: "30%" , marginRight: "1rem"}}>Price</p>
          <button style={{width: "10%" , marginRight: "1rem"}} className="dlt-btn" onClick={deleteAll}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-x-fill" viewBox="0 0 16 16">
              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7.354 5.646 8.5 6.793l1.146-1.147a.5.5 0 0 1 .708.708L9.207 7.5l1.147 1.146a.5.5 0 0 1-.708.708L8.5 8.207 7.354 9.354a.5.5 0 1 1-.708-.708L7.793 7.5 6.646 6.354a.5.5 0 1 1 .708-.708z" />
            </svg>
          </button>
        </div>
        <hr></hr>
        {products.map((el) => {
          return <CartItem key={el._id} {...el} />;
        })}
      </div>
    </>
  );
};

export default Cart;
