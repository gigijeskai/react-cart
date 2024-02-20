import React from "react";
import { useGlobalContext } from "../context/context";
import formatNumber from "../utils/formatNumber";

const TotalBox = () => {
  const { total } = useGlobalContext();
  return (
    <>
      <div className="total-cart">
        <h5>Cart</h5>
        <hr className="hr-total-cart" />
        <h5>{total.toFixed(2)}</h5>
        <hr className="hr-total-cart" />
        <button type="button" className="checkout-btn">
          Checkout
        </button>
      </div>
    </>
  );
};

export default TotalBox;
