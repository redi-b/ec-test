import React from "react";

import { useEffect, useState } from "react";
import Item from "./Item";
import ItemLoading from "./ItemLoading";

interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
}

const Collections = () => {
  const [products, setProducts] = useState<Array<Product>>([]);
  const [productsLoading, setProductsLoading] = useState(true);

  const url = "https://fakestoreapi.com/products?limit=4";

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();

      if (!response.ok) {
        return;
      }

      setProducts(Object.values(result));
      setProductsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 px-4 lg:pl-6">
      <h1 className="w-full py-2 font-bold tracking-widest text-center uppercase rounded-lg bg-orange-light">
        Our new collection
      </h1>
      <div className="grid grid-cols-1 gap-6 pb-4 sm:grid-cols-2 xl:grid-cols-4 min-h-64">
        {productsLoading &&
          [...Array(4)].map((_, idx) => {
            return <ItemLoading key={idx} />;
          })}
        {!productsLoading &&
          products.map((product) => {
            return (
              <Item
                key={product.id}
                id={product.id.toString()}
                img={product.image}
                title={product.title}
                price={product.price.toString()}
                quantity={1}
                collection
              />
            );
          })}
      </div>
    </div>
  );
};

export default Collections;
