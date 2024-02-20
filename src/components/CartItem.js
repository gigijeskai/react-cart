import React from "react";
import { useGlobalContext } from "../context/context";

const Cart = ({ _id, image, name, price, countInStock, qty }) => {
  const { deleteItem, addQty, dimQty } = useGlobalContext();
  const diminuisciQty = (id) => {
    if (qty - 1 <= 0) {
      deleteItem(id);
    } else {
      return dimQty(id);
    }
  };

  const aggiungiQty = (id) => {
    if (qty + 1 > countInStock) {
      return;
    }
    return addQty(id);
  };
  return (
    <article>
      <div  className="products" key={_id}>
        <img style={{width: "5%", marginLeft: "1rem", marginRight: "1rem"}} className="product-img" src={image} alt={name}></img>
        <p style={{width: "40%" , marginRight: "1rem"}}>{name}</p>
        <div style={{width: "10%" , marginRight: "1rem"}} className="qty">
          <button className="add-btn" onClick={() => aggiungiQty(_id)}>
            +
          </button>
          <p className="qty-prdct">{qty} </p>
          <button className="dlt-btn reduce-btn" onClick={() => diminuisciQty(_id)}>
            -
          </button>
        </div>
        <p style={{width: "30%" , marginRight: "1rem"}}>{price}€</p>
        <button style={{width: "10%" , marginRight: "1rem"}} className="dlt-btn" onClick={() => deleteItem(_id)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
          </svg>
        </button>
      </div>
    </article>
  );
};

export default Cart;
