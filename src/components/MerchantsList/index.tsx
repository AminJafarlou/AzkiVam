"use client";

import { useState } from "react";
import { MerchantItem, MerchantItemProps } from "../MerchantItem";

interface Props {
  list: MerchantItemProps[];
}

export function MerchantsList({ list }: Props) {
  const [searchTerm, setSearchTerm] = useState("");

  const getSearchedMerchants = () =>
    list.filter((item) => item.name.includes(searchTerm));

  return (
    <>
      <h2 className="mb-2">فروشگاه‌ها</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border-2 border-stale-500 rounded-md w-full h-8 p-1 mb-2"
      />
      {getSearchedMerchants().map((item: MerchantItemProps) => (
        <MerchantItem
          id={item.id}
          key={item.id}
          name={item.name}
        />
      ))}
    </>
  );
}
