import React from "react";

import { MdAccountCircle, MdEmail } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import { FaCamera, FaPhoneAlt } from "react-icons/fa";
import SmallLink from "./ui/small-link";
import useCartContext from "../hooks/useCartContext";
import { Link } from "react-router-dom";

import { cn } from "../lib/utils";

const Cart = ({
  size,
  small,
  className,
}: {
  size: number;
  small?: boolean;
  className?: string;
}) => {
  return (
    <Link to="/checkout" className="relative">
      <TiShoppingCart size={small ? 28 : 42} />
      <span
        className={cn(
          "flex items-center justify-center text-center absolute top-0 right-0 text-white bg-red-600 rounded-full",
          small ? "text-[0.5rem] w-3 h-3" : "text-xs w-[1.125rem] h-[1.125rem]",
          className
        )}
      >
        {size}
      </span>
    </Link>
  );
};

export const SideBar = () => {
  const { cartState } = useCartContext();

  return (
    <div className="bg-orange-default sticky top-4 ml-4 py-4 h-[calc(100vh-2rem)] w-16 rounded-lg flex flex-col items-center justify-between max-md:hidden">
      <div className="flex flex-col gap-2">
        <MdAccountCircle size={42} />
        <Cart
          size={cartState.size}
          className={`${cartState.size == 0 && "hidden"}`}
        />
      </div>
      <div className="flex flex-col gap-4">
        <SmallLink>
          <FaCamera size={16} />
        </SmallLink>
        <SmallLink>
          <MdEmail size={16} />
        </SmallLink>
        <SmallLink>
          <FaPhoneAlt size={16} />
        </SmallLink>
      </div>
    </div>
  );
};

export const SideBarMobile = () => {
  const { cartState } = useCartContext();

  return (
    <div className="flex flex-col items-center justify-between px-2.5 py-1.5 rounded-full bg-orange-default h-fit md:hidden">
      <div className="flex gap-2.5">
        <MdAccountCircle size={28} />
        <Cart
          size={cartState.size}
          className={`${cartState.size == 0 && "hidden"}`}
          small
        />
      </div>
    </div>
  );
};
