import React, { useState, useEffect } from "react";
import { genarateItems } from "../Hooks/index";
import { Cards } from "../Components/index";

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const items = await genarateItems();
      setData(items);
    };

    fetchData();
  }, []);

  return (
    <div className="flex w-full h-full m-auto flex-wrap">
      {data.map((item) => (
        <Cards
          price={item.price}
          img={item.image}
          title={item.title}
          id={item.id}
          desc={item.description}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default Page;
