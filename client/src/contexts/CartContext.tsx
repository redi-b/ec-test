import React, { createContext, useReducer } from "react";

interface cartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  bought: boolean;
  link?: string;
}

interface cartState {
  items: cartItem[];
  size: number;
}

export const CartActions = {
  ADD_ITEM: "add_item",
  REMOVE_ITEM: "remove_item",
  BUY_ITEM: "buy_item",
  CLEAR_CART: "clear_cart",
};

const cartReducer = (cartState: cartState, action: any) => {
  let exists = false;

  cartState.items.forEach((item) => {
    if (item.id === action.payload?.id) {
      exists = true;
    }
  });

  switch (action.type) {
    case CartActions.ADD_ITEM:
      console.log(typeof action.payload.id);
      console.log(action.payload.id);
      return exists
        ? {
            items: cartState.items.map((item) =>
              item.id === action.payload.id
                ? {
                    ...item,
                    quantity: item.quantity + (action.payload.quantity || 1),
                  }
                : item
            ),
            size: cartState.size + (action.payload.quantity || 1),
          }
        : {
            items: [
              ...cartState.items,
              {
                id: action.payload.id,
                name: action.payload.name,
                price: action.payload.price,
                quantity: action.payload.quantity,
                bought: false,
              },
            ],
            size: cartState.size + (action.payload.quantity || 1),
          };
    case CartActions.REMOVE_ITEM:
      if (exists && action.payload.quantity > 1) {
        return {
          items: cartState.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
          size: cartState.size - 1,
        };
      }

      return {
        items: cartState.items.filter((item) => item.id !== action.payload.id),
        size: cartState.size - 1,
      };
    case CartActions.BUY_ITEM:
      return {
        items: cartState.items.map((item) =>
          item.id === action.payload.id ? { ...item, bought: true } : item
        ),
        size: cartState.size,
      };
    case CartActions.CLEAR_CART:
      return {
        items: [],
        size: 0,
      };
    default:
      return cartState;
  }
};

export const CartContext = createContext<{
  cartState: cartState;
  cartDispatch: React.Dispatch<any>;
}>({
  cartState: { items: [], size: 0 },
  cartDispatch: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    items: [],
    size: 0,
  });

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};
