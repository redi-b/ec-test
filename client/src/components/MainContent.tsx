import React from "react";

const MainContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="relative flex flex-col w-full gap-4">{children}</div>;
};

export default MainContent;
