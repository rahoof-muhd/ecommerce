import React, { useEffect, useState } from "react";
import axios from "axios";

function Cart(){
  const [data, setData] = useState();
  useEffect(() => {
    axios.get("http://localhost:3000/api/getCart", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
    })
        .then(res => {
            setData(res.data);
        })
}, []);
console.log(data);
  return (
    <>
    <h1>cart</h1>
    {data?.products.map((item,index)=> (
      <React.Fragment key={index}>
        
      <div className="main">
      <div className="product" >
          <div className="product-img">
          <img src={item.products} alt="" height="200px" width={"200px"} />
          </div>
          <div className="product-details">
              <h3><b>USERNAME: </b> {item.sellerName}</h3>
              <h3><b>ITEM NAME: </b> {item.itemname}</h3>
              <h3><b>CATEGORY:</b> {item.category}</h3>
              <h3><b>DESCRIPTION:</b> { item.description}</h3>
              <h3><b>PRICE: </b> ₹{ item.price}</h3>
              <h3><b>COUNT:</b>{data?.count[index]}</h3>
          </div>
      </div>
          <div className="empty"></div>
  </div>

      </React.Fragment>
    ))}
    </>
  );
};

export default Cart;
