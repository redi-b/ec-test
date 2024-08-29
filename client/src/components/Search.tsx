import React from "react";
import { IoIosSearch } from "react-icons/io";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";

export const Search = () => {
  return (
    <form
      className="relative items-center hidden sm:flex"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        type="text"
        name="search"
        id="search"
        className="py-2 pl-6 pr-2 font-light transition-all border-gray-400 outline-none cursor-pointer lg:w-[30vw] rounded-s-full placeholder:text-black focus:cursor-auto border-s border-y focus:border-orange-400 peer"
        placeholder="Search"
      />
      <button
        type="submit"
        className="bg-white py-2 pl-2.5 pr-4 border-e border-y border-gray-400 peer-focus:border-orange-400 transition-all rounded-e-full"
      >
        <IoIosSearch size={24} />
      </button>
    </form>
  );
};

export const SearchSmall = () => {
  return (
    <div className="flex sm:hidden">
      <Sheet>
        <SheetTrigger className="p-[0.4rem] rounded-full border shadow-md border-gray-300">
          <IoIosSearch size={24} />
        </SheetTrigger>
        <SheetContent side="top" hideClose className="bg-bg/75">
        <SheetTitle className="hidden">Search</SheetTitle>
          <form
            className="relative flex items-center justify-center w-full"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              name="search"
              id="search"
              className="py-2 pl-6 pr-2 font-light transition-all border-gray-400 outline-none cursor-pointer lg:w-[30vw] rounded-s-full placeholder:text-black focus:cursor-auto border-s border-y focus:border-orange-400 peer"
              placeholder="Search"
            />
            <button
              type="submit"
              className="bg-white py-2 pl-2.5 pr-4 border-e border-y border-gray-400 peer-focus:border-orange-400 transition-all rounded-e-full"
            >
              <IoIosSearch size={24} />
            </button>
          </form>
        </SheetContent>
      </Sheet>
    </div>
  );
};
