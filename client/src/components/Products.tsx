import React, { useEffect, useState } from "react";
import { capitalize } from "../utils";
import Item from "./Item";
import ItemLoading from "./ItemLoading";

const Products = ({ addToCart }) => {
  // be category filter yaregal ante listun bicha keyrew
  // photo load ayaregimm alegn berase slehone yaw esun part astekaklew
  const [items, setItems] = useState([
    { id: 1, image: "", title: "", price: 0, category: "" },
  ]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [filter, setFilter] = useState(items || []);
  const [categories, setCategories] = useState(["All"]);
  const [itemsLoading, setItemsLoading] = useState(true);

  const active = "bg-orange-400 text-white";
  const inActive =
    "bg-white hover:bg-orange-400 hover:text-white border border-gray-200";

  const handleCategoryFilter = (category) => {
    if (category !== "All") {
      const categoryItems = items.filter(
        (item) => item.category === category.toLowerCase()
      );
      setFilter(categoryItems);
    } else {
      setFilter(items);
    }
    setActiveCategory(category);
  };

  const getCategories = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const result = await response.json();

      if (!response.ok) {
        return;
      }

      setCategories([
        "All",
        ...[...result].map((category) => capitalize(category)),
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  const getItems = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();

      if (!response.ok) {
        return;
      }

      setItems(result);
      setItemsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCategories();
    getItems();
  }, []);

  useEffect(() => {
    setFilter(items || []);
  }, [items]);

  return (
    <div
      id="products"
      className="flex-col items-center p-6 overflow-hidden divide-y-2 dvide-gray-300"
    >
      <div className="flex items-center gap-4 overflow-x-auto md:self-start text-nowrap lg:pb-1">
        {location.pathname === "/product"
          ? null
          : categories.map((category) => (
              <p
                key={category}
                className={`px-6 py-1.5 mb-3 font-normal w-max rounded-md hover:cursor-pointer shadow-md ${
                  activeCategory === category ? active : inActive
                }`}
                onClick={() => handleCategoryFilter(category)}
              >
                {category}
              </p>
            ))}
      </div>
      <div className="grid grid-cols-1 gap-6 py-4 justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {itemsLoading &&
          [...Array(8)].map((_, idx) => {
            return <ItemLoading key={idx} />;
          })}
        {!itemsLoading &&
          Array.isArray(filter) &&
          filter.map((item) => (
            //items
            <Item
              key={item.id}
              id={item.id.toString()}
              title={item.title}
              img={item.image}
              price={item.price.toString()}
              quantity={1}
            />
          ))}
      </div>
    </div>
  );
};

export default Products;
