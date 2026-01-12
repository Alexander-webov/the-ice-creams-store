import React from "react";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-[1400px] mx-auto px-10 ">{children}</div>;
}

export default Container;
