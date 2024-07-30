import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {removeFromCart} from "../Context/Products"

const MyCart = () => {

  const data = useSelector((state) => state.products) || []
  const dispatch = useDispatch();
  const [price,setPrice] = useState(0)

  const hendalClick = (id) => {
    dispatch(removeFromCart({id:id}))
  }

 

  useEffect(() => {
    let sum = 0;
    data.map((item) => {
      sum += item.price;
    })
    setPrice(sum)
  },[data])
  
 if (data && data.length === 0) {
   return <>No Products yet...</>;
 }
  return (
    <>
      <h3>Total Price is : {price}</h3>
      {data.map((item) => {
        return (
          <div className="flex mt-5" key={item.id}>
            <img src={item.img} alt="" className="h-50 w-40" />
            <div className="px-2">
              <h1>{item.title}</h1>
              <br />
              <div>{item.desc}</div>
              <br />
              <div>{item.price}</div>
              <br />
              <button className="bg-red-600 px-4" onClick={() => hendalClick(item.id)}>Remove From Cart</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MyCart;
