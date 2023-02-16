import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch } from "react-redux";
import { addItemToCart as sendToCart } from "../../../slicers/vinylSlice";

function Record({ el }) {
  const dispatch = useDispatch()

  return (
    <div className="col-3">
      <div className="box__Item">
        <img src={el.img} alt="" />
        <p className="item">{el.name}</p>
        <p className="item smallxs">
          {el.price}£{" "}
          <span onClick={() => {
            dispatch(sendToCart(el))
          }} className="item__cart">
            <AddShoppingCartIcon />
          </span>{" "}
        </p>
      </div>
    </div>
  );
}
export default Record;
