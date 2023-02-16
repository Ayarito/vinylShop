import React from "react";
import {  useSelector } from "react-redux";
import Record from "./CartRecord/Record";
import "./VinylStore.css";

function VinylStore() {


  const { items: stock } = useSelector((state) => state.vinylStore);

  console.log(stock);

  const item = stock.map((el) => (
    <Record key={el.id} el={el} />
  ));

  return (
    <section className="vinylstore">
      <div className="container">
        <h2 className="all__Headers">Recordstore exclusives</h2>
        <div className="row">
          {item}
        </div>
      </div>
    </section>
  );
}

export default VinylStore;
