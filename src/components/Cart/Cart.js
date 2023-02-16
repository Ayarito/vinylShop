import React from "react";
import "./Cart.css";
import '../../components/VinylStore/CartRecord/CartRecord.css'
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import CartRecord from "../VinylStore/CartRecord/CartRecord";

function Cart({ toggle, handleToggle }) {
  const cart = useSelector((state) => state.vinylStore.cart);

  return (
    <div className={toggle ? "cart__modal show" : "cart__modal"}>
      <p className="exit" onClick={handleToggle}>
        <CloseIcon />
      </p>
      <div className="cart__content">
        <h4>Total:</h4>
        <div className="box__Cart">
        {cart.map((record) => (
          <CartRecord key={record.id} el={record} />
        ))}
        </div>
      </div>
    </div>
  )
}

export default Cart;
