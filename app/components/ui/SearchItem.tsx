"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

function SearchItem() {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();
  function handelForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    router.push(`/shop?value=${encodeURIComponent(searchValue)}&page=1`);
  }
  return (
    <form onSubmit={handelForm} className="relative">
      <input
        type="text"
        className="border border-gray-500 w-full rounded-2xl py-5 px-10"
        placeholder="Search"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button className="absolute right-1 top-1 text-white bg-[#F83D8E] h-[90%] w-[140px] rounded-2xl cursor-pointer font-bold">
        I WANT
      </button>
    </form>
  );
}

export default SearchItem;
