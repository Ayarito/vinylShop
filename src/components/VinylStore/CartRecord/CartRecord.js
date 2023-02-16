import React from "react";
import CancelIcon from '@mui/icons-material/Cancel';
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../../../slicers/vinylSlice";

function CartRecord({ el }) {

  const dispatch = useDispatch()

  return (
    <>
      <div className="cart__img">
        <img src={el.img} alt="" />
      </div>

      <div className="cart__text">
        <p>{el.name}</p>
        <p className="cart__price">{el.price}£</p>
        <span onClick={()=>{
          dispatch(deleteFromCart(el.id))
        }}>
        <CancelIcon/>
        </span>
      </div>
    </>
  );
}
export default CartRecord;
