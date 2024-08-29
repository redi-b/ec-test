import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useCartContext from "../hooks/useCartContext";
import { CartActions } from "../contexts/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { cartDispatch } = useCartContext();
  const [data, setData] = useState({});
  const [dataLoading, setDataLoading] = useState(true);

  const [quantity, setQuantity] = useState(1);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const result = await response.json();

      if (!response.ok) {
        return;
      }

      setData(result);
      setDataLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="py-4">
      <div className="py-4 px-8 mx-auto bg-white rounded-lg shadow-lg max-w-[90vw] sm:max-w-[75vw] w-fit">
        {dataLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="flex flex-col items-center">
            <h2 className="mb-2 text-2xl font-bold text-center">
              {data.title}
            </h2>
            <img src={data.image} alt={data.title} className="w-64 h-64 mb-4" />
            <p className="mb-4 max-w-[32rem] text-center">{data.description}</p>
            <p className="mb-2 text-lg font-bold">Price: ${data.price}</p>
            <div className="flex items-center">
              <label htmlFor="quantity" className="mr-2">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="px-2 py-1 border border-gray-300 rounded"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() =>
                  cartDispatch({
                    type: CartActions.ADD_ITEM,
                    payload: { ...data, quantity, name: data.title },
                  })
                }
                className="px-4 py-2 mt-4 text-sm text-white bg-orange-500 rounded-full"
              >
                Add to Cart
              </button>
              <Link
                to="/checkout"
                className="px-4 py-2 mt-4 text-sm text-white bg-orange-500 rounded-full"
              >
                Go to checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
