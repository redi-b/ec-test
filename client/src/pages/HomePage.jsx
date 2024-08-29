import React from "react";

import TrendingItems from "../components/TrendingItems";
import Collections from "../components/Collections";
import Products from "../components/Products";

const HomePage = () => {
  return (
    <>
      <TrendingItems />
      {/* <Search /> */}
      <Collections />
      <Products />
    </>
  );
};

export default HomePage;
