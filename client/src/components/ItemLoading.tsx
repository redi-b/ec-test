import React from "react";

import { Skeleton } from "./ui/skeleton";

const ItemLoading = () => {
  return (
    <div className="flex flex-col justify-between space-y-3 rounded-lg shadow-lg h-80">
      <Skeleton className="w-full bg-gray-400 rounded-b-none h-44" />
      <div className="flex flex-col gap-6 p-4 space-y-2">
        <Skeleton className="h-4 w-[256px] bg-gray-400" />
        <Skeleton className="h-4 w-[256px] bg-gray-400" />
      </div>
    </div>
  );
};

export default ItemLoading;
