import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const data = useSelector((state) => state.products) || [];
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(data.length);
  }, [data]);

  return (
    <>
      <div className="flex justify-between items-center m-auto p-4">
        <Link to="/">
          <button className="flex items-center">
            <img
              src="https://banner2.cleanpng.com/20180519/jjs/avq0lgq0t.webp"
              alt="Logo"
              className="w-12 h-12 mix-blend-darken"
            />
            <span className="ml-2 text-xl font-bold text-gray-800">e-Comm</span>
          </button>
        </Link>
        <Link to="/mycart">
          <div className="relative inline-block">
            <button className="relative h-10 w-30 px-4 mb-3 bg-blue-600 text-white rounded-md">
              My Cart
            </button>
            <span className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
              {count}
            </span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Header;
