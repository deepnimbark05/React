import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../Context/Products";

const Cards = ({ id, desc, title, img, price }) => {
  const dispatch = useDispatch();
  const [isAddToCart, setAddToCart] = useState(true);

  useEffect(() => {
    const productes = JSON.parse(localStorage.getItem("Productes")) || [];
    const isInCart = productes.some((product) => product.id === id);
    setAddToCart(!isInCart);
  }, [id]);

  const handleClick = () => {
    if (isAddToCart) {
      dispatch(addToCart({ id, title, desc, price, img }));
    } else {
      dispatch(removeFromCart({ id }));
    }
    setAddToCart(!isAddToCart);
  };

  return (
    <div className="w-full md:w-4/12 p-4">
      <div className="bg-slate-900 text-white p-4 rounded-lg shadow-lg">
        <h5 className="text-lg font-bold line-clamp-4 overflow-hidden">
          {title}
        </h5>
        <img
          src={img}
          alt="Product Image"
          className="w-full h-48 object-cover rounded-md my-4"
        />
        <h6 className="text-xl font-semibold">{price}</h6>
        <p className="text-sm my-2 line-clamp-5 overflow-hidden">{desc}</p>
        <button
          className={`h-10 w-full px-4 mb-3 font-semibold rounded-md ${
            isAddToCart ? "bg-green-400" : "bg-red-600"
          }`}
          onClick={handleClick}
        >
          {isAddToCart ? "Add to Cart" : "Remove From Cart"}
        </button>
      </div>
    </div>
  );
};

export default Cards;
