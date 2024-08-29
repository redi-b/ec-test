import React from "react";

import { TiShoppingCart } from "react-icons/ti";

import { fixLength } from "../utils";
import { useNavigate } from "react-router-dom";
import useCartContext from "../hooks/useCartContext";
import { CartActions } from "../contexts/CartContext";

interface ItemProps {
  id: string;
  img: string;
  title: string;
  price: string;
  quantity: number;
  collection?: boolean;
}

const Item = ({ img, title, price, collection, id, quantity }: ItemProps) => {
  const { cartDispatch } = useCartContext();
  const navigate = useNavigate();

  const addToCart = (id, name, price, quantity, bought) => {
    cartDispatch({
      type: CartActions.ADD_ITEM,
      payload: {
        id: id,
        name: name,
        price: price,
        quantity: quantity,
        bought: bought,
      },
    });
  };

  return (
    <div
      onClick={() => navigate(`/product/${id}`)}
      className="flex flex-col w-full h-full max-w-xs gap-2 overflow-hidden bg-white rounded-lg cursor-pointer shadow-card"
    >
      <div className={`${collection ? "h-56" : "h-40"}`}>
        <img
          src={img}
          alt="item"
          className={`object-scale-down w-full h-full`}
        />
      </div>
      <div className="flex flex-col justify-between h-full p-4">
        <p className="text-lg font-light">{fixLength(title, 48)}</p>
        <div className="flex items-center justify-between">
          <p className="font-bold">$ {price}</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(id, title, price, quantity, false);
            }}
            className="flex gap-1 px-3 py-2 text-sm text-white bg-orange-500 rounded-full hover:scale-110"
          >
            <TiShoppingCart size={20} />
            <span>add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
