import React from "react";
import useCartContext from "../hooks/useCartContext";
import { fixLength, priceOfCart } from "../utils";
import { CartActions } from "../contexts/CartContext";
import { FiMinus } from "react-icons/fi";

const CheckoutPage = () => {
  const { cartState, cartDispatch } = useCartContext();

  return (
    <div className="flex flex-col items-center gap-4 lg:px-12">
      <h1 className="text-2xl font-black md:text-3xl">Check Out</h1>
      <main className="relative grid w-full grid-cols-1 gap-y-6 lg:gap-x-6 py-4 max-w-[90vw] md:max-w-[75vw] lg:max-w-[90vw] md:px-6 lg:grid-cols-3">
        <section className="col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="mb-4 text-lg font-bold md:text-xl">Order Summary</h2>
            <button
              onClick={() => {
                cartDispatch({
                  type: CartActions.CLEAR_CART,
                });
              }}
              disabled={cartState.size == 0}
              className="px-2 text-red-700 hover:text-red-600 disabled:text-gray-600"
            >
              Clear All
            </button>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            {cartState.size == 0 ? (
              <div className="text-center">
                <p className="text-xl font-light">No items in cart</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-[60%_15%_25%] text-base md:text-lg font-bold">
                  <p className="">Item</p>
                  <p className="">Qty</p>
                  <p className="w-full text-start">Price</p>
                </div>
                {cartState.items.map((item) => (
                  <div key={item.id} className="grid grid-cols-[60%_15%_25%]">
                    <div className="">
                      <p className="font-medium">{fixLength(item.name, 32)}</p>
                    </div>
                    <p className="w-full font-medium">{item.quantity}</p>
                    <div className="flex items-start justify-between">
                      <p className="font-medium">
                        ${item.price * item.quantity}
                      </p>
                      <button
                        onClick={() => {
                          cartDispatch({
                            type: CartActions.REMOVE_ITEM,
                            payload: { id: item.id, quantity: item.quantity },
                          });
                        }}
                      >
                        <FiMinus
                          size={24}
                          className="text-red-600 border-red-600 rounded-full hover:border-2"
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </>
            )}
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="font-medium">Delivery Fee</p>
              <p className="font-medium">
                ${(priceOfCart(cartState.items) * 0.05).toFixed(2)}
              </p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between text-lg font-bold md:text-xl">
              <p>Total</p>
              <p>${priceOfCart(cartState.items)}</p>
            </div>
          </div>
        </section>
        <section className="flex flex-col self-center w-full">
          <h2 className="mb-4 text-lg font-bold md:text-xl">
            Delivery Information
          </h2>
          <div className="w-full p-6 bg-white rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Full Name</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Full Name"
              />
            </div>
            <div className="flex gap-2 mb-4">
              <div className="">
                <label className="block mb-2 text-gray-700">Address</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Address"
                />
              </div>
              <div className="">
                <label className="block mb-2 text-gray-700">City</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="City"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Phone Number</label>
              <input
                type="number"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Phone Number"
              />
            </div>
            <div className="mb-4"></div>
          </div>
          <button className="w-full px-4 py-2 mt-4 font-bold text-white bg-orange-500 rounded-md hover:bg-yellow-600">
            Place Order
          </button>
        </section>
      </main>
    </div>
  );
};

export default CheckoutPage;
